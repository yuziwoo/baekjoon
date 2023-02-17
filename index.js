const fs = require('fs');
const input = fs.readFileSync('try.txt').toString().split(' ');

console.log(parseInt(input[0]) + parseInt(input[1]));