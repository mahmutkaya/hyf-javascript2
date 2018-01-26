"use strict";

let monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180
  },
  {
    name: "Some web development",
    duration: 120
  },
  {
    name: "Fix homework for class10",
    duration: 20
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  }
];

let tuesday = [
  {
    name: "Keep writing summary",
    duration: 240
  },
  {
    name: "Some more web development",
    duration: 180
  },
  {
    name: "Staring out the window",
    duration: 10
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  },
  {
    name: "Look at application assignments new students",
    duration: 40
  }
];

let tasks = monday.concat(tuesday);

//Collect two days' worth of tasks.

console.log("Collect two days worth of tasks:'loading..'");

// Convert the task durations to hours, instead of minutes.
let cnvrt = tasks.map(x => x.duration / 60);

console.log(cnvrt);

//Filter out everything that took two hours or more (remove from the collection)
let filtr = tasks.filter(x => x.duration >= 120);

console.log(filtr);

//Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.

console.log("Multiply the each duration..:'loading..'");

//Output a formatted Euro amount.
console.log("Output a formatted Euro amount:'loading..'");