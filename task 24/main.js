"use strict";
let apple = "apple";
let uppercaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// test for equality with strings
console.log("is apple is equal to apple?");
console.log("apple" === "apple");
console.log("\napple is not equal to apple?");
console.log("apple" != "apple");
// test using lowercase function
console.log("\nis Apple is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nApple is not equal to apple after to converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// test using numerical is equal to
console.log("\n is ten is equal to twenty?");
console.log(10 == twenty);
// test using not equal to
console.log("\nten is not equal to twenty?");
console.log(10 != twenty);
// test using greater then
console.log("\nten is greater then zoro");
console.log(10 > 0);
// test using less then
console.log("\ntwenty is less then ten?");
console.log(20 < ten);
// test using greater then equal to
console.log("\n ten is greater then or equal to five");
console.log(ten >= 5);
// using less then equal to
console.log("\ntwenty is less then equal to ten?");
console.log(twenty <= ten);
// using && or operator
console.log("\ntwenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
// using &&
console.log("\ntwenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
// using or ||
console.log("\n20 is greater then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n20 is greater then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// eheather an item is include in array
console.log("\nis orange include in my array?");
console.log(fruits.includes("orange"));
// not include
console.log("\nis orange not include in array");
console.log(!fruits.includes("orange"));
