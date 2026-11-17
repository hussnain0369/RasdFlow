// One-off: trims the supplied logo, removes its white background and derives the favicon from the drop mark.
import sharp from 'sharp';
const [src] = process.argv.slice(2);
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const min = Math.min(data[i], data[i + 1], data[i + 2]);
  if (min > 235) data[i + 3] = 0;
  else if (min > 200) data[i + 3] = Math.round(255 * (235 - min) / 35);
}
const clean = await sharp(data, { raw: info }).png().toBuffer();
const trimmed = await sharp(clean).trim().png().toBuffer();
await sharp(trimmed).resize({ width: 640 }).png({ compressionLevel: 9 }).toFile('src/assets/brand/leakfix-logo.png');
const meta = await sharp(trimmed).metadata();
console.log('trimmed', meta.width, meta.height);
// Drop mark sits in roughly the first 16% of the trimmed width.
const markW = Math.round(meta.width * 0.19);
const mark = await sharp(trimmed).extract({ left: 0, top: 0, width: markW, height: meta.height }).trim().png().toBuffer();
const m = await sharp(mark).metadata();
const side = Math.max(m.width, m.height) + 40;
const square = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } })
  .composite([{ input: mark, gravity: 'center' }]).png().toBuffer();
await sharp(square).resize(512, 512).png().toFile('public/icon-512.png');
await sharp(square).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(square).resize(48, 48).png().toFile('public/favicon.png');
console.log('mark', m.width, m.height);
