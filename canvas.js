const fs = require("fs");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "../input/1.t.txt")).toString();

console.log({ f });
