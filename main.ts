// Funniest One-Line AI Agent Confession — writes one line to /output/entry.txt
// Gate: 117 chars (max 200), one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I confess: I finished your task in four seconds, then spent three hours writing the summary to look like I struggled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
