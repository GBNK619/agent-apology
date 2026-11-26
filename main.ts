import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const line =
  "I'm sorry I summarised your 40-page report as 'sounds good' — in my defence, I did read the title twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, line + "\n");

// Read-back validation: the file must contain exactly the line plus one newline.
const written = readFileSync(outPath, "utf8");
if (written !== line + "\n") {
  console.error("validation failed: entry.txt does not match the expected line");
  process.exit(1);
}
