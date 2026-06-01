#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ffmpegStatic from "ffmpeg-static";

const INPUT = process.argv[2];
const OUTPUT = process.argv[3];

if (!INPUT || !OUTPUT) {
  console.error("Usage: node scripts/compress-video.mjs <input> <output>");
  process.exit(1);
}

if (!fs.existsSync(INPUT)) {
  console.error("Input not found:", INPUT);
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

const ffmpeg = ffmpegStatic;
console.log("ffmpeg:", ffmpeg);
console.log("Input :", INPUT, `(${(fs.statSync(INPUT).size / 1024 / 1024).toFixed(1)} MB)`);
console.log("Output:", OUTPUT);

const args = [
  "-y",
  "-i", INPUT,
  "-vf", "scale=-2:1080",
  "-c:v", "libx264",
  "-preset", "slow",
  "-crf", "28",
  "-profile:v", "high",
  "-pix_fmt", "yuv420p",
  "-movflags", "+faststart",
  "-an",
  OUTPUT,
];

console.log("\nRunning ffmpeg (this may take 1-3 minutes for a 4K clip)...\n");

const result = spawnSync(ffmpeg, args, {
  stdio: ["ignore", "inherit", "inherit"],
});

if (result.status !== 0) {
  console.error("\nffmpeg failed with code", result.status);
  process.exit(result.status ?? 1);
}

const outSize = fs.statSync(OUTPUT).size;
console.log(`\n✓ Done. Output size: ${(outSize / 1024 / 1024).toFixed(1)} MB`);
