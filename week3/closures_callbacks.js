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
      console.log(i);
    }
  }
  return arr;
}

function sayThree(divTree) {
  console.log(divTree);
}
function sayFive(divFive) {
  console.log(divFive);
}

threeFive(10, 15, sayThree, sayFive);
//==============3==============
{
  function repeatStringNumTimes(str, num) {
    if (typeof num !== "number" || num < 1) {
      return "";
    }
    const origStr = str;
    for (let i = 1; i < num; i++) {
      str += origStr;
    }
    return str;
  }

  console.log(repeatStringNumTimes("abc", 3));
}

console.log("\nStep 4.3.2");
{
  function repeatStringNumTimes(str, num) {
    if (typeof num !== "number" || num < 1) {
      return "";
    }
    const origStr = str;
    let i = 1;
    while (i < num) {
      str += origStr;
      i++;
    }
    return str;
  }

  console.log(repeatStringNumTimes("abc", 3));
}

console.log("\nStep 4.3.3");
{
  function repeatStringNumTimes(str, num) {
    if (typeof num !== "number" || num < 1) {
      return "";
    }
    const origStr = str;
    let i = 1;
    do {
      str += origStr;
      i++;
    } while (i < num);
    return str;
  }

  console.log(repeatStringNumTimes("abc", 3));
}

console.log("\nStep 4.4");
{
  // Note: prefer let and const over var
  const Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
  };

  const MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
  };

  console.log(new Car());
  console.log(new MotorBike());
}

console.log("\nStep 4.5");
{
  function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      let innerArray = arr[i];
      for (let j = 0; j < innerArray.length; j++) {
        product *= innerArray[j];
      }
    }
    return product;
  }

  const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  console.log(result);
}

console.log("\nStep 4.6");
{
  const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];

  // This function calls itself recursively
  function printAll(arg) {
    if (Array.isArray(arg)) {
      arg.forEach(elem => printAll(elem));
    } else {
      console.log(arg);
    }
  }

  printAll(arr3d);
}

console.log("\nStep 4.7");
{
  let x = 9;
  function f1(val) {
    val = val + 1;
    return val;
  }
  f1(x);
  console.log(x);
  console.log(
    "function f1 does not change the value of variable x: x is passed by value"
  );

  let y = { x: 9 };
  function f2(val) {
    val.x = val.x + 1;
    return val;
  }
  f2(y);
  console.log(y);
  console.log(
    "function f2 changes the value of property y.x: y is passed by reference"
  );
}