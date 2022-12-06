const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "./input/1.txt")).toString();

function calculation() {
  const split1 = f.split("\n\n");

  const toto = split1.map((elf) => {
    const calories = elf.split("\n");
    return calories.reduce((a, c) => {
      return Number(a) + Number(c);
    }, 0);
  });
  const sortedResult = toto.sort((a, b) => b - a);
  const result1 = Math.max(...sortedResult);
  console.log("Challenge1.1", result1)
  const a = toto[0]
  const b = toto[1]
  const c = toto[2]
  const result2 = a + b + c
  console.log("Challenge1.2", result2)
}

calculation();