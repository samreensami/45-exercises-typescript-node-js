// define the function to magicine names 
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great".concat(name); });
}
var magician_name = ["Harry poter", "Hamza", "usman"];
var great_magicine = make_great(magician_name);
console.log(great_magicine);
