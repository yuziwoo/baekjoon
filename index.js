const s = require('fs').readFileSync('/dev/stdin').toString();
let a = "";
let b = "";
for (let i = 0; i < parseInt(s); i++) {
  a += "*";
  b += `${a}\n`;
}
console.log(b);