import { loadInput } from "../util/load";

const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const numsIndexes = Object.keys(nums);

function day1p1(input: string) {
    const sum = input
        .split("\n")
        .map(extractNumbersFromLine)
        .reduce((prev, curr) => prev + curr, 0);

    return sum;
}

function day1p2(input: string) {
    const sum = input
        .split("\n")
        .map(strToNum)
        .map(extractNumbersFromLine)
        .reduce((prev, curr) => prev + curr, 0);

    return sum;
}

function extractNumbersFromLine(line: string) {
    const filteredNums = line.split("").filter(x => numsIndexes.includes(x))
    return Number(filteredNums[0] + filteredNums.at(-1));
}

function strToNum(line: string) {
    let replaced = line;

    for (let i = 0; i < replaced.length; i++) {
        for (const [index, num] of Object.entries(nums)) {
            if (replaced[i] == num[0]) {
                if (replaced.slice(i, i + num.length) === num) {
                    replaced = replaced.slice(0, i) + index + line.slice(i + num.length - 1);
                }
            }
        }
    }

    return replaced;
}

console.log(day1p1(loadInput(__dirname, "input.txt")));
console.log(day1p2(loadInput(__dirname, "input.txt")));
