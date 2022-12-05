const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "./input/2.t.txt")).toString();

function calculation() {
 const opponentPlay = {
    a: "Rock",
    b: "Paper",
    c: "Scissors",
 }
 const myPlay = {
    y: "Rock",
    x: "Paper",
    z: "Scissors"
 }
 const counter = 0

 const arr = []
const toto = f.split("\n")
console.log(toto)
}

calculation();
