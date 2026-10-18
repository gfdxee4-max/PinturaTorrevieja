const fs = require("node:fs/promises");
const path = require("node:path");
const { createRequire } = require("node:module");
const requireFromNext = createRequire(require.resolve("next/package.json"));
const sharp = requireFromNext("sharp");

// Coordinates refer to the supplied 1086 x 1448 originals. Only plates are masked.
const plates = {
  "4052": "385,914 730,917 729,979 385,975",
  "4054": "757,759 1049,731 1051,815 759,853",
  "4055": "17,760 316,814 306,909 10,842",
};

async function main() {
  const input = process.argv[2];
  if (!input) throw new Error("Pass the directory containing IMG_4051.PNG through IMG_4055.PNG");
  const originals = path.resolve(".data/originals/bmw-e46-cabriolet");
  const output = path.resolve("public/images/projects/bmw-e46-cabriolet");
  await fs.mkdir(originals, { recursive: true });
  await fs.mkdir(output, { recursive: true });
  for (let number = 4051; number <= 4055; number++) {
    const name = `IMG_${number}.PNG`;
    const original = path.join(originals, name);
    await fs.copyFile(path.join(input, name), original);
    const metadata = await sharp(original).metadata();
    if (metadata.width !== 1086 || metadata.height !== 1448) {
      throw new Error(`Unexpected dimensions for ${name}; review mask coordinates`);
    }
    let pipeline = sharp(original);
    if (plates[number]) {
      const mask = Buffer.from(`<svg width="1086" height="1448"><polygon points="${plates[number]}" fill="#252525"/></svg>`);
      pipeline = pipeline.composite([{ input: mask }]);
    }
    const destination = path.join(output, `after-${number - 4050}.webp`);
    // Lossless WebP preserves paint detail and removes metadata; no resizing or AI edits.
    await pipeline.webp({ lossless: true, effort: 6 }).toFile(destination);
    console.log(`${name} -> ${path.relative(process.cwd(), destination)}: ${(await fs.stat(destination)).size} bytes; masked=${Boolean(plates[number])}`);
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
