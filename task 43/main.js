// define the function to magicine names 
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great".concat(name); });
}
var magician_name = ["Harry poter", "Hamza", "usman"];
var great_magician = make_great(magician_name);
console.log(great_magician);
// making a copy of origional arraytrough . slice() function
var copy_magician_name = magician_name.slice();
// modify the copy arrayto include "the hreat" with their names
var copy_great_magician = make_great(copy_magician_name);
// show both arrays origional and copied
show_magician(copy_magician_name);
