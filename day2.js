const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "./input/2.txt")).toString();

const toto = f.split("\n").map((line) => line.split(" "));
console.log(toto);

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

function score(opponentPlay, myPlay) {
  if (opponentPlay === myPlay) {
    return myPlay + 3;
  }
  if (
    (opponentPlay === moves.rock && myPlay === moves.paper) ||
    (opponentPlay === moves.paper && myPlay === moves.scissors) ||
    (opponentPlay === moves.scissors && myPlay === moves.rock)
  ) {
    return myPlay + 6;
  }
  return myPlay;
}

function Part1() {
  const outcomes = toto.map((line) => {
    const opponentPlay = mapInput[line[0]];
    console.log("opponent play", opponentPlay);
    const myPlay = mapInput[line[1]];
    console.log("myPlay", myPlay);
    return score(opponentPlay, myPlay);
  });
  console.log(outcomes.reduce((a, b) => a + b, 0));
}

const solution = {
  A: {
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

function Part2() {
  const outcomes = toto.map((line) => {
    const opponentPlay = mapInput[line[0]];
    const myPlay = solution[line[0]][line[1]];
    return score(opponentPlay, myPlay);
  });
  console.log(outcomes.reduce((a, b) => a + b, 0));
}

Part1();
Part2();
