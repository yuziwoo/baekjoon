//한 줄 입력 try.txt 지우고 /dev/stdin
const s = require('fs').readFileSync('try.txt').toString().split(' ');
const s = require('fs').readFileSync('/dev/stdin').toString().split(' ');


//여러 줄 입력 : try.txt 지우고 /dev/stdin
const s = require('fs').readFileSync('try.txt').toString().split('\n');
const s = require('fs').readFileSync('/dev/stdin').toString().split('\n');

/dev/stdin