// Pulls your latest public Behance projects (title, link, year, cover) into the repo.
// Usage: npm run sync:behance
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const USER = "anushreyjain";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36";
const outDir = path.join(process.cwd(), "public", "designs", "behance");

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#039;|&#39;/g, "'").replace(/&quot;/g, '"');
const pick = (block, tag) =>
  block.match(new RegExp(`<${tag}>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>`))?.[1]?.trim() ?? "";

const res = await fetch(`https://www.behance.net/feeds/user?username=${USER}`, {
  headers: { "user-agent": UA },
});
if (!res.ok) throw new Error(`Behance feed failed: ${res.status}`);
const xml = await res.text();

await mkdir(outDir, { recursive: true });

const items = [];
for (const block of xml.split("<item>").slice(1)) {
  const link = pick(block, "link");
  const id = link.match(/gallery\/(\d+)/)?.[1];
  const cover = block.match(/src='([^']+)'/)?.[1];
  if (!id || !cover) continue;

  const hiRes = cover.replace("/projects/404/", "/projects/808/");
  const img = await fetch(hiRes, { headers: { "user-agent": UA } });
  // Store covers as small WebP files (shown at ~320px), not the full-size originals.
  const file = `${id}.webp`;
  if (img.ok) {
    const webp = await sharp(Buffer.from(await img.arrayBuffer()))
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    await writeFile(path.join(outDir, file), webp);
  }

  items.push({
    id,
    title: decode(pick(block, "title")),
    href: link,
    year: new Date(pick(block, "pubDate")).getFullYear(),
    image: img.ok ? `/designs/behance/${file}` : null,
  });
}

await writeFile(
  path.join(process.cwd(), "lib", "behance.json"),
  JSON.stringify({ profile: `https://www.behance.net/${USER}`, items }, null, 2) + "\n"
);
console.log(`Synced ${items.length} Behance projects`);
