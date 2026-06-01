#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const SQL_PATH = process.argv[2];
if (!SQL_PATH) {
  console.error("Usage: node scripts/summarize-wp.mjs <path-to.sql>");
  process.exit(1);
}

const sql = fs.readFileSync(SQL_PATH, "utf8");

function extractInsertBlocks(sql, tableName) {
  const blocks = [];
  const marker = `INSERT INTO \`${tableName}\``;
  let pos = 0;
  while (true) {
    const start = sql.indexOf(marker, pos);
    if (start === -1) break;
    const colsStart = sql.indexOf("(", start);
    const colsEnd = sql.indexOf(")", colsStart);
    const colsText = sql.slice(colsStart + 1, colsEnd);
    const columns = colsText.split(",").map((c) => c.trim().replace(/`/g, ""));
    const valuesIdx = sql.indexOf(" VALUES", colsEnd);
    if (valuesIdx === -1) break;
    let i = valuesIdx + " VALUES".length;
    let inString = false;
    const dataStart = i;
    while (i < sql.length) {
      const ch = sql[i];
      if (inString) {
        if (ch === "\\") {
          i += 2;
          continue;
        }
        if (ch === "'") inString = false;
      } else {
        if (ch === "'") inString = true;
        else if (ch === ";") break;
      }
      i++;
    }
    blocks.push({ columns, dataText: sql.slice(dataStart, i) });
    pos = i + 1;
  }
  return blocks;
}

function parseSqlValues(text) {
  const rows = [];
  let i = 0;
  while (i < text.length) {
    while (i < text.length && text[i] !== "(") i++;
    if (i >= text.length) break;
    i++;
    const row = [];
    let cur = "";
    let inString = false;
    let depth = 1;
    while (i < text.length && depth > 0) {
      const ch = text[i];
      if (inString) {
        if (ch === "\\" && i + 1 < text.length) {
          const next = text[i + 1];
          if (next === "n") cur += "\n";
          else if (next === "t") cur += "\t";
          else if (next === "r") cur += "\r";
          else cur += next;
          i += 2;
          continue;
        }
        if (ch === "'") {
          inString = false;
          i++;
          continue;
        }
        cur += ch;
        i++;
      } else {
        if (ch === "'") {
          inString = true;
          i++;
          continue;
        }
        if (ch === "(") {
          depth++;
          cur += ch;
          i++;
          continue;
        }
        if (ch === ")") {
          depth--;
          if (depth === 0) {
            row.push(cur.trim());
            i++;
            break;
          }
          cur += ch;
          i++;
          continue;
        }
        if (ch === "," && depth === 1) {
          row.push(cur.trim());
          cur = "";
          i++;
          continue;
        }
        cur += ch;
        i++;
      }
    }
    rows.push(row);
    while (i < text.length && (text[i] === "," || /\s/.test(text[i]))) i++;
  }
  return rows;
}

function loadTable(tableName) {
  const blocks = extractInsertBlocks(sql, tableName);
  const all = [];
  for (const block of blocks) {
    const rows = parseSqlValues(block.dataText);
    for (const row of rows) {
      const obj = {};
      block.columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      all.push(obj);
    }
  }
  return all;
}

function stripHtml(s) {
  return (s || "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|h[1-6]|div|li)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&[a-z]+;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const posts = loadTable("kkqqu_posts");

const real = {
  pages: posts.filter(
    (p) =>
      p.post_type === "page" &&
      p.post_status === "publish" &&
      /\bMBCM\b|Mercedes|klub|magyar|kiskőrös|zwack|váci|haraszti|alelnök/i.test(
        p.post_content || p.post_title || ""
      )
  ),
  portfolios: posts.filter(
    (p) =>
      p.post_type === "portfolio-item" &&
      p.post_status === "publish" &&
      /klub|mercedes|magyar|kiskőrös|zwack|múzeum|látogat/i.test(p.post_content || "")
  ),
};

const demoPages = posts.filter(
  (p) =>
    p.post_type === "page" &&
    p.post_status === "publish" &&
    !real.pages.find((r) => r.ID === p.ID)
);
const demoPortfolios = posts.filter(
  (p) =>
    p.post_type === "portfolio-item" &&
    p.post_status === "publish" &&
    !real.portfolios.find((r) => r.ID === p.ID)
);

const attachments = posts.filter(
  (p) => p.post_type === "attachment" && (p.guid || "").length > 0
);

function attachmentsForParent(parentId) {
  return attachments.filter((a) => String(a.post_parent) === String(parentId));
}

function isImage(url) {
  return /\.(jpe?g|png|gif|webp|svg)$/i.test(url || "");
}

const attachmentsByYear = {};
for (const a of attachments) {
  const year = (a.post_date || "").slice(0, 4) || "?";
  attachmentsByYear[year] = attachmentsByYear[year] || [];
  attachmentsByYear[year].push(a);
}

const md = [];
md.push("# MBCM régi WP — tartalom-import áttekintés");
md.push("");
md.push(`> Készült: ${new Date().toISOString().slice(0, 10)} · Forrás: \`${path.basename(SQL_PATH)}\``);
md.push(
  `> Összes publikált bejegyzés: ${real.pages.length + real.portfolios.length + demoPages.length + demoPortfolios.length} · Csatolmány (kép/fájl): ${attachments.length}`
);
md.push("");
md.push("## Hogyan használd ezt a dokumentumot");
md.push("");
md.push("Minden tartalom mellett egy jelölőnégyzet van — pipáld be amit megtartanánk az új oldalra. Ha szerkesztett szöveg kell, írd a megjegyzésbe. A téma-demo lista a végén csak referencia hogy lásd mit hagytunk ki.");
md.push("");
md.push("---");
md.push("");
md.push("## ✓ VALÓDI MBCM TARTALOM");
md.push("");
md.push(`### Klubról szóló oldalak (${real.pages.length} db)`);
md.push("");

for (const p of real.pages) {
  md.push(`#### ${p.post_title}`);
  md.push("");
  md.push(`- **Eredeti URL:** \`http://mbcm.hu/${p.post_name}/\``);
  md.push(`- **Dátum:** ${(p.post_date || "").slice(0, 10)}`);
  md.push(`- **ID:** ${p.ID}`);
  md.push("");
  md.push("**Tartalom letisztítva:**");
  md.push("");
  md.push("```");
  md.push(stripHtml(p.post_content).slice(0, 3000));
  md.push("```");
  md.push("");
  md.push("**Mit csináljunk vele?**");
  md.push("- [ ] Megtartani változatlanul");
  md.push("- [ ] Szerkeszteni (alább írd mit változtassunk)");
  md.push("- [ ] Eldobni / nem releváns");
  md.push("");
  md.push("Megjegyzés: ");
  md.push("");
}

md.push(`### Klubesemények — portfolio-item (${real.portfolios.length} db)`);
md.push("");
for (const p of real.portfolios) {
  md.push(`#### ${p.post_title}`);
  md.push("");
  md.push(`- **Eredeti URL:** \`http://mbcm.hu/portfolio-item/${p.post_name}/\``);
  md.push(`- **Dátum:** ${(p.post_date || "").slice(0, 10)}`);
  md.push(`- **ID:** ${p.ID}`);
  md.push("");
  md.push("**Tartalom letisztítva:**");
  md.push("");
  md.push("```");
  md.push(stripHtml(p.post_content));
  md.push("```");
  md.push("");

  const related = attachmentsForParent(p.ID).filter((a) => isImage(a.guid));
  if (related.length > 0) {
    md.push(`**Kapcsolódó képek (${related.length} db):**`);
    md.push("");
    for (const a of related) {
      md.push(`- \`${a.guid}\``);
    }
    md.push("");
  }

  md.push("**Mit csináljunk vele?**");
  md.push("- [ ] Megtartani változatlanul");
  md.push("- [ ] Szerkeszteni");
  md.push("- [ ] Eldobni");
  md.push("");
  md.push("Megjegyzés: ");
  md.push("");
}

md.push("---");
md.push("");
md.push("## 👤 Vezetőség (a régi Rólunk oldalból)");
md.push("");
md.push("A te által megadott hivatalos email-ek: `president@mbcm.hu`, `secretary@mbcm.hu`. A WP dump-ban talált személyes email-ek vélhetően elavultak, de a **szerepkörök** referenciaként hasznosak — különösen a 3. személy (alelnök), aki nem szerepelt a megadott listában.");
md.push("");
md.push("| Név | Szerep | Régi (személyes) email |");
md.push("|-----|--------|-------------------------|");
md.push("| Marosi György | Elnök | `marosi.gyorgy@metalcar.hu` |");
md.push("| **Barkó Imre** | **Alelnök** ⚠️ ÚJ | `barkoimre@korrektnyomda.hu` |");
md.push("| Lastofka Péter | Titkár | `plastofka@gmail.com` |");
md.push("");
md.push("**Kérdések:**");
md.push("- [ ] Barkó Imre alelnök még aktív poszt? Felvegyük a Kapcsolat szekcióba?");
md.push("- [ ] Ha igen, milyen email-cím tartozik hozzá (`vicepresident@mbcm.hu`?)");
md.push("- [ ] Esetleg más vezetőségi tag (felügyelő bizottság, kincstárnok)?");
md.push("");
md.push("---");
md.push("");
md.push("## 📷 Csatolmányok / képek áttekintése");
md.push("");
md.push(`Összesen **${attachments.length} csatolmány** szerepel a dumpban. Most töltöd az \`uploads.zip\`-et — ebben az összes itt felsorolt URL fájlja megvan, valódi formában.`);
md.push("");
md.push("### Év szerinti megoszlás");
md.push("");
md.push("| Év | Csatolmány |");
md.push("|----|------------|");
const yearsSorted = Object.keys(attachmentsByYear).sort();
for (const y of yearsSorted) {
  md.push(`| ${y} | ${attachmentsByYear[y].length} |`);
}
md.push("");
md.push("### Klubeseményekhez kapcsolt képek");
md.push("");

const eventLinkedAttachments = real.portfolios
  .map((p) => ({ post: p, images: attachmentsForParent(p.ID).filter((a) => isImage(a.guid)) }))
  .filter((x) => x.images.length > 0);

if (eventLinkedAttachments.length === 0) {
  md.push("> Nincs `post_parent` szerinti közvetlen kapcsolat. A képek a `wp-content/uploads/YYYY/MM/` mappákban dátum szerint vannak rendezve — a zip-ből rakhatjuk össze melyik melyik eseményhez tartozik.");
  md.push("");
}

md.push("### Összes attachment URL (referencia, az uploads.zip-ben fellelhető)");
md.push("");
md.push("<details>");
md.push(`<summary>Mind a ${attachments.length} kép/fájl URL kibontható</summary>`);
md.push("");
const attachmentsSorted = [...attachments].sort((a, b) =>
  (a.post_date || "").localeCompare(b.post_date || "")
);
let prevYM = "";
for (const a of attachmentsSorted) {
  const ym = (a.post_date || "").slice(0, 7);
  if (ym !== prevYM) {
    if (prevYM) md.push("");
    md.push(`**${ym}**`);
    md.push("");
    prevYM = ym;
  }
  md.push(`- \`${a.guid}\` ${a.post_title ? `· ${a.post_title}` : ""}`);
}
md.push("");
md.push("</details>");
md.push("");
md.push("---");
md.push("");
md.push("## ✗ Téma-demo tartalom (nem MBCM, nem migráljuk)");
md.push("");
md.push("A régi oldal egy **Laurent étterem-téma demo content-tel** futott — ezeket sosem cserélték le valódi MBCM tartalomra. Felsorolva csak hogy lásd, mit hagyunk ki.");
md.push("");
md.push(`### Demo pages (${demoPages.length} db)`);
md.push("");
for (const p of demoPages) {
  md.push(`- ${p.post_title} (${(p.post_date || "").slice(0, 10)}) — slug: \`${p.post_name}\``);
}
md.push("");
md.push(`### Demo portfolio-items (${demoPortfolios.length} db, Lorem ipsum)`);
md.push("");
for (const p of demoPortfolios) {
  md.push(`- ${p.post_title} (${(p.post_date || "").slice(0, 10)})`);
}
md.push("");
md.push("---");
md.push("");
md.push("## Következő lépés");
md.push("");
md.push("Olvasd át, jelöld be amit megtartanánk, írd a megjegyzéseket. Visszaküldve folytatom a beapasztást a következő szekciókba: AboutOverlay (Rólunk szöveg), Galéria (valódi képek), Magazin (events).");

const outDir = path.join(path.dirname(SQL_PATH), "wp-import");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "MBCM-WP-tartalom.md");
fs.writeFileSync(outFile, md.join("\n"), "utf8");

console.log(`Markdown kimentve: ${outFile}`);
console.log(`Méret: ${(fs.statSync(outFile).size / 1024).toFixed(1)} KB`);
console.log(`Sorok: ${md.length}`);
