const fs = require("node:fs/promises");
const path = require("node:path");
const { createRequire } = require("node:module");
const sharp = createRequire(require.resolve("next/package.json"))("sharp");

async function main() {
  const input = process.argv[2];
  if (!input) throw new Error("Pass the directory containing the selected Nissan door photographs");
  const originals = path.resolve(".data/originals/nissan-door-repair");
  const output = path.resolve("public/images/projects/nissan-door-repair");
  await fs.mkdir(originals, { recursive: true });
  await fs.mkdir(output, { recursive: true });
  for (const [time, name] of [["22-09-42", "before-main"], ["22-12-06", "after-main"], ["22-09-40", "before-detail"], ["22-09-37", "after-detail"]]) {
    const filename = `photo_2026-11-21_${time}.jpg`;
    const original = path.join(originals, filename);
    await fs.copyFile(path.join(input, filename), original);
    const image = sharp(original).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true });
    for (const format of ["webp", "avif"]) {
      const encoder = format === "webp" ? image.clone().webp({ quality: 95, effort: 6 }) : image.clone().avif({ quality: 80, effort: 6 });
      const info = await encoder.toFile(path.join(output, `${name}.${format}`));
      console.log(`${filename} -> ${name}.${format}: ${info.width}x${info.height}, ${info.size} bytes`);
    }
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
