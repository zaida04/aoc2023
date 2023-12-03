import { readFileSync } from "fs";
import { join } from "path";

export function loadInput(base: string, filename: string) {
    const file = readFileSync(join(base, filename), "utf8");
    return file;
}