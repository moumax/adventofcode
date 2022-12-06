const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "./input/3.t.txt")).toString();

function calculation() {
 console.log(f) 
}

calculation();

