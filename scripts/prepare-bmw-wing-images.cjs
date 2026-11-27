const fs = require("node:fs/promises");
const path = require("node:path");
const { createRequire } = require("node:module");
const sharp = createRequire(require.resolve("next/package.json"))("sharp");

async function main() {
  const input = process.argv[2];
  if (!input) throw new Error("Pass the directory containing the four selected BMW photographs");
  const originals = path.resolve(".data/originals/bmw-front-wing");
  const output = path.resolve("public/images/projects/bmw-front-wing");
  await fs.mkdir(originals, { recursive: true });
  await fs.mkdir(output, { recursive: true });
  for (const [number, name] of [[3, "before-main"], [2, "after-main"], [4, "before-detail"], [1, "after-detail"]]) {
    const filename = `photo_${number}_2026-11-27_23-38-19.jpg`;
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
