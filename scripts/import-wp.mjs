#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const SQL_PATH = process.argv[2];
if (!SQL_PATH) {
  console.error("Usage: node scripts/import-wp.mjs <path-to.sql>");
  process.exit(1);
}

const sql = fs.readFileSync(SQL_PATH, "utf8");

const POSTS_TABLE = "kkqqu_posts";

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

const blocks = extractInsertBlocks(sql, POSTS_TABLE);
console.log(`Talált INSERT blokkok: ${blocks.length}`);

const allRows = [];
for (const block of blocks) {
  const rows = parseSqlValues(block.dataText);
  for (const row of rows) {
    const obj = {};
    block.columns.forEach((col, idx) => {
      obj[col] = row[idx];
    });
    allRows.push(obj);
  }
}

const byType = {};
for (const r of allRows) {
  const t = r.post_type || "?";
  byType[t] = (byType[t] || 0) + 1;
}

const byStatus = {};
for (const r of allRows) {
  const key = `${r.post_type}:${r.post_status}`;
  byStatus[key] = (byStatus[key] || 0) + 1;
}

const INTERESTING_TYPES = ["post", "page", "portfolio-item"];
const realPosts = allRows.filter(
  (r) => INTERESTING_TYPES.includes(r.post_type) && r.post_status === "publish"
);

const sortedPosts = realPosts.sort((a, b) =>
  (b.post_date || "").localeCompare(a.post_date || "")
);

console.log("\n=== Összesítés ===");
console.log(`Összes sor a posts táblában: ${allRows.length}`);
console.log("\nMegoszlás post_type szerint:");
for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k}: ${v}`);
}
console.log("\nMegoszlás type:status szerint (csak post/page/portfolio):");
for (const [k, v] of Object.entries(byStatus)
  .filter(([k]) => INTERESTING_TYPES.some((t) => k.startsWith(`${t}:`)))
  .sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k}: ${v}`);
}

console.log(`\n=== Valódi publikált cikkek/oldalak: ${sortedPosts.length} db ===\n`);

for (const p of sortedPosts) {
  const date = (p.post_date || "").slice(0, 10);
  const title = (p.post_title || "").slice(0, 70);
  const hasContent = (p.post_content || "").trim().length > 0 ? "✓" : "✗";
  console.log(
    `  [${(p.post_type || "?").padEnd(15)}] ${date} | content:${hasContent} | ${String(p.ID).padStart(5)} | ${title}`
  );
}

const outDir = path.join(path.dirname(SQL_PATH), "wp-import");
fs.mkdirSync(outDir, { recursive: true });

const minimalDump = sortedPosts.map((p) => ({
  id: Number(p.ID),
  type: p.post_type,
  date: p.post_date,
  slug: p.post_name,
  title: p.post_title,
  excerpt: p.post_excerpt,
  content_length: (p.post_content || "").length,
  content: p.post_content,
}));

const outFile = path.join(outDir, "posts.json");
fs.writeFileSync(outFile, JSON.stringify(minimalDump, null, 2), "utf8");
console.log(`\nJSON kimentve: ${outFile}`);
console.log(`(${minimalDump.length} cikk/oldal, méret: ${(fs.statSync(outFile).size / 1024).toFixed(1)} KB)`);
