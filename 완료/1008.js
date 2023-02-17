const s = require('fs').readFileSync('/dev/stdin').toString().split(' ').map((v)=>{return parseInt(v)});
console.log(s[0]/s[1]);