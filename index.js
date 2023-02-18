const s = require('fs').readFileSync('try.txt').toString().split("\n");

for (let i=1; i<s.length; i++) {
  let a = s[i].split(" ");
  let b = BigInt(a[0]);
  let c = BigInt(a[1]);

  let d = BigInt(1);
  for (let i=BigInt(1); i <=b; i=i+BigInt(1)) {
    d= d * c;
    c= c - BigInt(1);
  }

  let e = BigInt(1);
  for (let i=BigInt(1); i <=b; i=i+BigInt(1)) {
    e *= i;
    e= e * BigInt(1);
  }
  console.log(d/e+"");
}