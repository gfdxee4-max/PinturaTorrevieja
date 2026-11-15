const fs = require("node:fs/promises");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { createRequire } = require("node:module");
const sharp = createRequire(require.resolve("next/package.json"))("sharp");

async function main() {
  const input = process.argv[2];
  if (!input) throw new Error("Pass the directory containing the four selected HEIC originals");
  const originals = path.resolve(".data/originals/nissan-juke-front-bumper");
  const output = path.resolve("public/images/projects/nissan-juke-front-bumper");
  await fs.mkdir(originals, { recursive: true });
  await fs.mkdir(output, { recursive: true });
  for (const [number, name] of [[4570, "before-main"], [4568, "before-detail"], [4591, "after-main"], [4592, "after-detail"]]) {
    const original = path.join(originals, `IMG_${number}.HEIC`);
    const decoded = path.join(originals, `IMG_${number}.png`);
    await fs.copyFile(path.join(input, `IMG_${number}.HEIC`), original);
    execFileSync("heif-convert", [original, decoded], { stdio: "pipe" });
    const image = sharp(decoded).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true });
    for (const format of ["webp", "avif"]) {
      const destination = path.join(output, `${name}.${format}`);
      const encoder = format === "webp" ? image.clone().webp({ quality: 92, effort: 6 }) : image.clone().avif({ quality: 72, effort: 6 });
      const info = await encoder.toFile(destination);
      console.log(`${name}.${format}: ${info.width}x${info.height}, ${info.size} bytes`);
    }
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
