// exercise 3 name casses

let personName = "samreen sami";

//uppercase

console.log (personName.toUpperCase());

//lowercase
console.log(personName.toLowerCase());

//Tittle case
console.log(personName.replace(/\b\w/g, (char)=>char.toUpperCase()));
