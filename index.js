const s = (require('fs').readFileSync('/dev/stdin')+'').split('\n');
const a = parseInt(s[0]);
const b = s[1].split("").map(v => parseInt(v));
console.log(`${b[2]*a}\n${b[1]*a}\n${b[0]*a}\n${a*s[1]}`);