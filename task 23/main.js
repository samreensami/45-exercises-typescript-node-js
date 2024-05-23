"use strict";
//  test 1: equality comparison
let car = "subaru";
console.log("is car == `subaru`? i predict true");
console.log(car == `subaru`);
// test 2:inequality comparison
console.log("is car != `subaru`? i predict false");
console.log(car != `subaru`);
// test 3: strict equality comparison
console.log("is car === `subaru`? i predict true");
console.log(car === `subaru`);
// test 4:strict inequality comparison
console.log("is car !== `subaru`? i predict false");
console.log(car !== `subaru`);
// test :5 less then comparision
console.log("is car < `subaru`? i predict false");
console.log(car < `subaru`);
// test :6 greater then
console.log("is car > `subaru`? i predict false");
console.log(car > `subaru`);
// test :7 less then = comparison
console.log("is car <= `subaru`? i predict false");
console.log(car <= `subaru`);
// test :8 greater then = comparison
console.log("is car >= `subaru`? i predict false");
console.log(car <= `subaru`);
// test :9 checking truthiness
console.log("is car ?` i predict false");
console.log(car);
// test :10 checking falseness
console.log("is car ?` i predict false");
console.log(!car);
