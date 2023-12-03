import { readFileSync } from "fs";
import { join, dirname } from "path";
import callsite from "callsite";

export function loadInput(base: string, filename?: string) {
    const file = readFileSync(join(base, filename ?? "input.txt"), "utf8");
    return file;
}

type AOCFunction = (input: string) => void;
export function run(dayFunction: AOCFunction) {
    const stack = callsite();
    const requester = stack[1].getFileName();
    const requesterDir = dirname(requester);

    console.log(dayFunction(loadInput(requesterDir)));
}