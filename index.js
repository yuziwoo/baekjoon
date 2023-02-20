const s = (require('fs').readFileSync('/dev/stdin')+'').split(' ').map(v => parseInt(v));
const [a, b, c] = s;
let d = [];
d.push((a+b)%c);
d.push(((a%c) + b%c)%c);
d.push((a*b)%c);
d.push(((a%c)*(b%c))%c)
console.log(d.join("\n"));