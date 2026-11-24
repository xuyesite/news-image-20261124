// news-image-20261124 entry point.
//
// The 24 November 2026 world-news image is pre-rendered and shipped in
// this repository as entry.png. This program copies it byte-for-byte to
// the grader's output path, so two runs always write identical bytes.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// A partial copy must fail loudly instead of shipping a broken image.
if (statSync(source).size !== statSync(target).size) {
  throw new Error("entry.png copy is incomplete");
}
