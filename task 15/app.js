var guestlist = ["sam", "sami", "safdar", "ali"];
console.log(guestlist);
var dontcome = guestlist[0];
console.log("sam cant come");
guestlist.splice(0, 1, "zoha");
guestlist.forEach(function (guest) { return console.log("assalam o alaikum\n".concat(guest, "\n,would you like to dinner with me?\n")); });
