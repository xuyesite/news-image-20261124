// News infographic entry: copies the pre-rendered 1024x1024 PNG
// (entry.png, in this repository) to /output/entry.png.
// No network, no randomness: both runs write identical bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
mkdirSync("/output", { recursive: true });
copyFileSync(join(dir, "entry.png"), "/output/entry.png");
