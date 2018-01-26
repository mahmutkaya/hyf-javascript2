"use strict";

let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter(x => x % 2 !== 0);
newNumbers = newNumbers.map(x => x * 2);

console.log("The doubled numbers are ", newNumbers);