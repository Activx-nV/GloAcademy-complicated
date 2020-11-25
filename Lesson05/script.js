'use strict';

let arr = ['345', '562', '175', '286', '453', '292', '867'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || (arr[i][0] === '4')) {
        console.log(arr[i]);
    }
}

console.log('==================================================');

let numbers = 100;


nextNumber: for (let i = 2; i <= numbers; i++) {

  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
        continue nextNumber; 
    }
  }
  console.log(`Делители этого числа: 1 и ${i}`);
}