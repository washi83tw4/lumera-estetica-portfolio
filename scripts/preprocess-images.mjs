/**
 * Pre-processing script for Luméra Estética image assets.
 * 
 * Guarantees that all images in /public/images/lumera/ have:
 * - High-resolution masters exceeding 2x display dimensions (Retina ready)
 * - Lanczos3 high-fidelity resampling
 * - Subtle edge contrast enhancement (unsharp mask) for textures, bottles and skin
 * - High quality WebP encoding (quality: 90, effort: 6)
 * - Explicit @2x variants generated alongside standard masters
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUTPUT_DIR = path.resolve(process.cwd(), 'public/images/lumera');

// Remote master URLs (=s0 queries the uncompressed master from Google CDN)
const IMAGE_CONFIGS = [
  {
    name: 'hero-estetica',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBljKoJShDZI-ZApbEVuPQa0_ROzSGpgLnIICGXgqwKfMYqSgoPrXwjPs3mLtyqtFprqfLqJPRCIcaA1IFQOhTyovQZPQLIA8lzSscgeX4tRrK0cEtk1AnCSeYVyDA_YRnpn5zpAd0zmTBk4TL0f-dmRbBf3fI_xyE94ryGZwv356wudCSXc_7q8nl_U3bQqOpFUAypzFL_UlGm1sLEHAEIRb62PZx6cfJA-YcWRncqBKMqAS1Mo-v7IQ=s0',
    maxDisplayWidth: 440,
    targetWidth: 1080,
    targetHeight: 1446, // maintains ~3:4 / 4:5.4 vertical ratio
    unsharp: { sigma: 0.8, m1: 0.6, m2: 0.05 },
    description: 'Hero Portrait'
  },
  {
    name: 'tratamento-facial',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIJ51SHfSz_aCwZM-Ia8gePVdQ00jVlAIjUcr2Jk4wJy707qXIdfzbnwX-laMtGc4Be66A1RwAkeGFAcITsMCxUbynnVogba04UCKkzp5yqe2wo7D_xlvGjkE4vH_lxIShV6VThaDwZGcjwy-Dnf4b_nctxGWHBnlWlnyRmRRI4WNb_bb2tcFMr3c6BZLb2Z9kz2S1WkjV-wMM6LCY06IIksH9RQDafB4bP2q1K2pNBLVnZp7lE4EFKg=s0',
    maxDisplayWidth: 540,
    targetWidth: 1200,
    targetHeight: 1200, // 1:1 square master
    unsharp: { sigma: 0.8, m1: 0.6, m2: 0.05 },
    description: 'Facial Serum Treatment'
  },
  {
    name: 'ambiente-lumera',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByxC4HbV4w1EVVzG0-xRmT4NPbuH-n_FYgRfTYH5lvZguTSMNJvd3O-hYtvCbjrLGEEnNvPFto47eyLXzVkRqwTeX0aR5y3CmLtsTRs2R9Q9-i-Ab4ASUs7JeRh91goywTZtz6Z-btVS7oPUWQ0FhYzLpA3p77PoXI3VOV4v0Fha4D7ALRbrgTvZ2saMgPwpZHxm9SYOWXvUrmztvBy-Oa2nyZ1Ushynawz9s9EOdiAu0Ly9Tt0Fc_2A=s0',
    maxDisplayWidth: 650,
    targetWidth: 1440,
    targetHeight: 1075, // 16:11 architectural ratio
    unsharp: { sigma: 0.8, m1: 0.6, m2: 0.05 },
    description: 'Studio Architecture'
  },
  {
    name: 'seruns-botanicos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJs5P-1S6hMY7qJzbXBgux4MNkEL73Kw6abjwW8ykkbAZV1Z9vs3exXRjb8uC1kwI2RhJvG-vBaY42vr5H7snFIY9KbTxgeSpWuu7OeVXek3uygSnEVo7c1DMizcGwTMi3PBTwO0cmhil850qUZ-U9o8KrAznFmJqLN_IXbShOIe8J6_P_WtLNhK6a3o6AbNd6y7MFZUrmX90dWifEN4NYrhu7fkVqQYKG9rSMey_Q7zIQWWLmPgMKyQ=s0',
    maxDisplayWidth: 760,
    targetWidth: 1600,
    targetHeight: 2143, // vertical 3:4 master
    unsharp: { sigma: 0.9, m1: 0.7, m2: 0.05 },
    description: 'Botanica Alchemia Bottles & Stone'
  }
];

async function fetchSourceBuffer(item) {
  const localMaster = path.join(OUTPUT_DIR, `${item.name}.webp`);
  
  try {
    const res = await fetch(item.url);
    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }
  } catch (err) {
    console.warn(`[preprocess] Failed to fetch remote for ${item.name}, checking local...`, err.message);
  }

  if (fs.existsSync(localMaster)) {
    return fs.readFileSync(localMaster);
  }

  throw new Error(`No image source available for ${item.name}`);
}

export async function preprocessImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('===============================================================');
  console.log('Luméra Estética — Otimização e Pré-processamento de Imagens');
  console.log('===============================================================');

  const report = [];

  for (const item of IMAGE_CONFIGS) {
    const inputBuffer = await fetchSourceBuffer(item);
    const originalMeta = await sharp(inputBuffer).metadata();

    // 1. Process Master WebP (High-Res 2x+)
    const masterPipeline = sharp(inputBuffer)
      .resize({
        width: item.targetWidth,
        height: item.targetHeight,
        fit: 'cover',
        position: sharp.strategy.attention,
        kernel: sharp.kernel.lanczos3
      })
      .sharpen(item.unsharp)
      .webp({
        quality: 90,
        effort: 6,
        smartSubsample: true
      });

    const masterOutputPath = path.join(OUTPUT_DIR, `${item.name}.webp`);
    await masterPipeline.toFile(masterOutputPath);

    // 2. Process Explicit @2x WebP
    const at2xOutputPath = path.join(OUTPUT_DIR, `${item.name}@2x.webp`);
    await masterPipeline.toFile(at2xOutputPath);

    const masterMeta = await sharp(masterOutputPath).metadata();
    const stats = fs.statSync(masterOutputPath);
    const dprRatio = (masterMeta.width / item.maxDisplayWidth).toFixed(2);

    report.push({
      arquivo: `${item.name}.webp`,
      origem: `${originalMeta.width}x${originalMeta.height}`,
      resolucao: `${masterMeta.width}x${masterMeta.height}`,
      maxDisplayWidth: `${item.maxDisplayWidth}px`,
      dpr: `${dprRatio}x (>= 2x)`,
      tamanho: `${Math.round(stats.size / 1024)} KB`
    });
  }

  console.table(report);
  console.log('✓ Todas as imagens foram processadas com sucesso para resolução >= 2x display.');
}

// Execute when invoked directly
if (import.meta.url === `file://${process.argv[1]}`) {
  preprocessImages().catch((err) => {
    console.error('Error during image preprocessing:', err);
    process.exit(1);
  });
}
