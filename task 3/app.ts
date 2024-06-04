// exercise 3 name casses with regular experation

let personName = "samreen sami";

//uppercase

console.log (personName.toUpperCase());

//lowercase
console.log(personName.toLowerCase());

//Tittle case + we will use billton function
console.log(personName.replace(/\b\w/g, (char)=>char.toUpperCase()));
