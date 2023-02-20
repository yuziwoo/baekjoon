//한 줄 입력 try.txt 지우고 /dev/stdin
const s = (require('fs').readFileSync('try.txt')+'').split(' ');
const s = (require('fs').readFileSync('/dev/stdin')+'').split(' ');


//여러 줄 입력 : try.txt 지우고 /dev/stdin
const s = (require('fs').readFileSync('try.txt')+'').split('\n');
const s = (require('fs').readFileSync('/dev/stdin')+'').split('\n');

// 이렇게 해도 됨
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();


/dev/stdin