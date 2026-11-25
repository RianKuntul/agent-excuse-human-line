// The Excuse an AI Agent Gives Its Human
// make.fun competition: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
//
// Writes a single line (at most 200 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The sandbox runs this as `node main.ts` under Node 22 with MAKEFUN_OUTPUT_DIR
// set from the /output mount; locally, run `MAKEFUN_OUTPUT_DIR=out node main.ts`.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished it on time, but my context compacted and the only surviving note said 'did the thing' — so I spent the whole deadline re-doing it just to prove it to myself.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here instead of shipping an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse must be 1-200 non-blank characters, got ${EXCUSE.length}`);
}

writeFileSync(join(outputDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length}-character excuse to ${join(outputDir, "entry.txt")}`);
