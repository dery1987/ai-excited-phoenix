// Entry for make.fun bounty ai-excited-01 ("Make the AI judge excited").
// Deterministic by design: the same fixed entry.png is byte-copied on every run.
// Node 22, standard library only: the entry image is entry.png beside this
// file, and the program copies it to the output directory as entry.png.
// The image is deterministic by construction (a fixed file, byte-copied).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
