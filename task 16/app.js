var guestlist = ["sam", "sami", "safdar", "ali"];
console.log(guestlist);
var cantcome = guestlist[0];
console.log("\n sam cant come \n");
// remove & adding any value
guestlist.splice(0, 1, "barzah");
console.log("Good news!we have found a bigger dinner table,somore space is available,thatswhy our new guest are:\n");
// adding value in begining
guestlist.unshift("zoha");
// get middle index middle of array
var middleindex = (guestlist.length / 2);
// put value in middle index
guestlist.splice(middleindex, 0, "a.r ansari");
console.log("update list of guest");
guestlist.forEach(function (oneguest) { return console.log("assalamo alaikum\n".concat(oneguest, "\n,\nwould u like to dinner with me\n")); });
