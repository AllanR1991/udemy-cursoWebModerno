/**
 * let a = 7;
 * let b = 94;
 */

let a = 7;
let b = 94;
let temp = 0;

console.log(a,b);
/*
temp = b;

b = a;

a = temp;
*/

[a,b] = [b,a];

console.log(a,b);