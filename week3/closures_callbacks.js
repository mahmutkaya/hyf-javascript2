"use strict";

//==============1==============
function foo(func) {
  func();
}

function bar() {
  console.log("Hello, I am bar!");
}

foo(bar);

//==============2.1==============
function doIt() {
  console.log("I am done");
}
setTimeout(doIt, 2000);

//==============2.2==============

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  var arr = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    arr.push(i);
    if (i % 3 === 0) {
      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " is dividable by 3 and 5");
    }
  }
  return arr;
}

function sayThree(divTree) {
  console.log(divTree + " is dividable by 3");
}
function sayFive(divFive) {
  console.log(divFive + " is dividable by 5");
}

threeFive(10, 15, sayThree, sayFive);
//==============3==============
