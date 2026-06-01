#!/usr/bin/env node
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "public", "legal");
fs.mkdirSync(OUT_DIR, { recursive: true });

const FONT_REG = "C:/Windows/Fonts/segoeui.ttf";
const FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf";
const FONT_LIGHT = "C:/Windows/Fonts/segoeuil.ttf";

function makeDoc(title) {
  const doc = new PDFDocument({
    size: "A4",
    margin: 60,
    info: {
      Title: title,
      Author: "Mercedes-Benz Classic Magyarország Club",
      Creator: "MBCM",
      Producer: "MBCM",
    },
  });
  doc.registerFont("reg", FONT_REG);
  doc.registerFont("bold", FONT_BOLD);
  if (fs.existsSync(FONT_LIGHT)) doc.registerFont("light", FONT_LIGHT);
  else doc.registerFont("light", FONT_REG);
  return doc;
}

function eyebrow(doc, text) {
  doc.font("reg").fontSize(8).fillColor("#888");
  doc.text(text.toUpperCase(), { characterSpacing: 3 });
  doc.fillColor("#000");
}

function h1(doc, text) {
  doc.moveDown(0.4);
  doc.font("light").fontSize(28).fillColor("#0a0a0a");
  doc.text(text);
  doc.moveDown(0.6);
}

function h2(doc, text) {
  doc.moveDown(0.9);
  doc.font("bold").fontSize(11).fillColor("#0a0a0a");
  doc.text(text.toUpperCase(), { characterSpacing: 2 });
  doc.moveDown(0.3);
}

function body(doc, text) {
  doc.font("reg").fontSize(10.5).fillColor("#262626");
  doc.text(text, { align: "left", lineGap: 3 });
}

function bullet(doc, items) {
  doc.font("reg").fontSize(10.5).fillColor("#262626");
  for (const item of items) {
    doc.text("·  " + item, { indent: 8, lineGap: 3 });
  }
}

function footer(doc, text) {
  const y = doc.page.height - 50;
  doc.font("reg").fontSize(8).fillColor("#888");
  doc.text(text, 60, y, {
    width: doc.page.width - 120,
    align: "center",
    characterSpacing: 2,
  });
}

// ============================================================
// IMPRESSZUM
// ============================================================
{
  const doc = makeDoc("Impresszum — MBCM");
  const out = path.join(OUT_DIR, "impresszum.pdf");
  doc.pipe(fs.createWriteStream(out));

  eyebrow(doc, "— Hivatalos közlemény");
  h1(doc, "Impresszum");

  h2(doc, "Üzemeltető");
  body(
    doc,
    "Mercedes-Benz Classic Magyarország Club\nRövidített név: MBCM"
  );

  h2(doc, "Székhely");
  body(doc, "1239 Budapest, Haraszti út 48");

  h2(doc, "Jogi adatok");
  body(
    doc,
    "Adószám: 18114380-1-41\nNyilvántartási szám: 01-02-0010417"
  );

  h2(doc, "Képviselő");
  body(doc, "Marosi György — Elnök\nE-mail: president@mbcm.hu");

  h2(doc, "Vezetőség");
  bullet(doc, [
    "Marosi György — Elnök — president@mbcm.hu",
    "Barkó Imre — Alelnök — vice-president@mbcm.hu",
    "Lastofka Péter — Titkár — secretary@mbcm.hu",
  ]);

  h2(doc, "Jogi képviselő");
  body(doc, "Kovács Attila\nE-mail: legal@mbcm.hu");

  h2(doc, "Honlap");
  body(doc, "https://mbcm.hu");

  h2(doc, "Tárhely szolgáltató");
  body(
    doc,
    "(A weboldal aktuális tárhelyszolgáltatójának adatai itt kerülnek megjelenítésre.)"
  );

  footer(doc, "Hatályos: 2026. június · Mercedes-Benz Classic Magyarország Club");
  doc.end();
  console.log("✓ Generated:", out);
}

// ============================================================
// ADATVÉDELMI TÁJÉKOZTATÓ
// ============================================================
{
  const doc = makeDoc("Adatvédelmi tájékoztató — MBCM");
  const out = path.join(OUT_DIR, "adatvedelem.pdf");
  doc.pipe(fs.createWriteStream(out));

  eyebrow(doc, "— Hivatalos közlemény");
  h1(doc, "Adatvédelmi tájékoztató");

  body(
    doc,
    "A Mercedes-Benz Classic Magyarország Club (továbbiakban: MBCM, vagy Klub) az alábbi adatvédelmi tájékoztatóban foglaltak szerint kezeli a honlap látogatóinak és a vele kapcsolatba lépő személyek adatait."
  );

  h2(doc, "1. Adatkezelő");
  body(
    doc,
    "Név: Mercedes-Benz Classic Magyarország Club\nSzékhely: 1239 Budapest, Haraszti út 48\nE-mail: president@mbcm.hu"
  );

  h2(doc, "2. Kezelt adatok köre");
  body(
    doc,
    "A Klub a honlapon keresztül kizárólag a látogató önkéntes hozzájárulása alapján és a kapcsolatfelvétel során megadott adatokat kezeli:"
  );
  bullet(doc, [
    "Név (a látogató által megadott)",
    "E-mail cím (a látogató által megadott)",
    "Az üzenet tartalma (a kapcsolatfelvétel során megadott)",
  ]);

  h2(doc, "3. Adatkezelés célja és jogalapja");
  body(
    doc,
    "A Klub a kezelt adatokat kizárólag a megkeresésre adott válaszadás céljából használja fel. Az adatkezelés jogalapja a látogató önkéntes hozzájárulása (GDPR 6. cikk (1) bek. a) pont)."
  );

  h2(doc, "4. Sütik (cookie-k) használata");
  body(
    doc,
    "A weboldal nem helyez el sütiket a látogatók eszközén, és nem gyűjt anonim viselkedési adatokat sem."
  );

  h2(doc, "5. Adattárolás időtartama");
  body(
    doc,
    "A kapcsolatfelvétel során megadott adatokat a Klub az ügyintézés befejezéséig, de legfeljebb 1 évig kezeli, ezt követően azokat törli."
  );

  h2(doc, "6. Adattovábbítás");
  body(
    doc,
    "A Klub a látogatók adatait harmadik személynek nem továbbítja, kivéve a jogszabályban előírt eseteket."
  );

  h2(doc, "7. Az érintett jogai");
  body(doc, "A látogató jogosult kérni a Klubtól:");
  bullet(doc, [
    "tájékoztatást a róla kezelt adatokról,",
    "az adatainak helyesbítését vagy törlését,",
    "az adatkezelés korlátozását,",
    "az adatainak hordozhatóságát,",
    "a hozzájárulás visszavonását.",
  ]);

  doc.moveDown(0.4);
  body(
    doc,
    "Jogai érvényesítéséhez forduljon a Klub jogi képviselőjéhez: Kovács Attila — legal@mbcm.hu"
  );

  h2(doc, "8. Hatósági jogorvoslat");
  body(
    doc,
    "Az érintett panaszával a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat:\n\nCím: 1055 Budapest, Falk Miksa utca 9-11.\nTelefon: +36 1 391 1400\nHonlap: https://www.naih.hu"
  );

  footer(doc, "Hatályos: 2026. június · Mercedes-Benz Classic Magyarország Club");
  doc.end();
  console.log("✓ Generated:", out);
}
