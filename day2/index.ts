import { run } from "../util/load";
import { sumUp } from "../util/math";

const cubes_amounts = {
    "red": 12,
    "green": 13,
    "blue": 14
}

function day2p1(input: string) {
    const sum = input
        .split("\n")
        .filter(validateGame)
        .map(extractGameId)
        .reduce(sumUp, 0);

    return sum;
}

function day2p2(input: string) {
    const sum = input
        .split("\n")
        .map(getMins)
        .map((mins) => mins.red * mins.green * mins.blue)
        .reduce(sumUp, 0);

    return sum;
}

function validateGame(line: string) {
    const skipGameId = line.split(":")[1];
    const rounds = skipGameId.split(";");

    for (const round of rounds) {
        const cubes = round.split(",");

        for (const cube of cubes) {
            const [amount, color] = cube.trim().split(" ");
            if (cubes_amounts[color] < amount) return false;
        }
    }

    return true;
}

function extractGameId(game: string) {
    const indexOfColon = game.indexOf(":");
    // "Game " is always 5 chars
    const gameID = game.slice(5, indexOfColon);
    const parsedGameID = Number(gameID);

    return parsedGameID;
}

function getMins(line: string) {
    const mins = {
        "red": 0,
        "green": 0,
        "blue": 0
    }
    const skipGameId = line.split(":")[1];
    const rounds = skipGameId.split(";");

    for (const round of rounds) {
        const cubes = round.split(",");

        for (const cube of cubes) {
            const [amount, color] = cube.trim().split(" ");
            if (Number(amount) > mins[color]) {
                mins[color] = amount;
            }
        }
    }

    return mins;
}

run(day2p1);
run(day2p2);
