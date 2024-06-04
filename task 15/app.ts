let guestlist=["sam","sami","safdar","ali"];
console.log(guestlist);
let dontcome = guestlist[0];

console.log("sam cant come");
guestlist.splice(0,1,"zoha");
guestlist.forEach(guest=>console.log(`assalam o alaikum\n${guest}\n,would you like to dinner with me?\n`));