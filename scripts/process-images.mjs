import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const sharp = require("/mnt/d/varenyam/node_modules/sharp");

const people = "public/people";

async function portrait(src, out, { forceRotate = 0 } = {}) {
  let img = sharp(src).rotate(); // honor EXIF orientation first
  if (forceRotate) img = sharp(await img.toBuffer()).rotate(forceRotate);
  await img
    .resize({ width: 700, height: 850, fit: "cover", position: "top" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out + ".tmp");
  const { default: fs } = await import("node:fs");
  fs.renameSync(out + ".tmp", out);
  const meta = await sharp(out).metadata();
  const kb = (fs.statSync(out).size / 1024).toFixed(0);
  console.log(`${out}  ${meta.width}x${meta.height}  ${kb}KB`);
}

// Pranay's DSCF photo is stored rotated; EXIF .rotate() should fix it.
await portrait(`${people}/pranay-khanwalkar.jpg`, `${people}/pranay-khanwalkar.jpg`);
await portrait(`${people}/ayush-jaiswal.jpg`, `${people}/ayush-jaiswal.jpg`);
await portrait(`${people}/shubham-chouksey.jpg`, `${people}/shubham-chouksey.jpg`);
console.log("done");
