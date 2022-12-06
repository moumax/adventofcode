const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "./input/3.t.txt")).toString().split("\n");

function calculation() {
    const res = f.map((line) => {
        const part1 = [...line.slice(0, line.length / 2)]
        console.log("part1", part1)
        const part2 = [...line.slice(line.length / 2)]
        console.log("part2", part2)
    })
}

calculation();

