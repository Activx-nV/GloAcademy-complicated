"use strict";

let num = 266219;
let numArray = num.toString().split('').reduce((res, item) => item * res, 1);
console.log(numArray);

let result = numArray ** 3;
console.log(result);
console.log(result.toString().substr(0,2));