"use strict";
let guestlist = ["sam", "sami", "safdar", "ali"];
//for(let i=0;i<guestlist.length;i++);
//console.log("assalam o alaikum ${guestlist[i]};\n you are invited to dinner!\n");
//console.log(`"unfortunayely${guestlist[1]},cant come to the dinner."`);
//guestlist [1]="hina";
console.log("\n new list of invitation \n");
for (let j = 0; j < guestlist.length; j++) {
    console.log(`assalam o alaikum${guestlist[j]}:\n you are invited to dinner!\n`);
}
console.log("Good news!we have found a bigger dinner table,somore space is available,thatswhy our new guest are:\n");
guestlist.unshift("zoha");
guestlist.splice(2, 0, "barzah");
guestlist.push("rijja");
for (let i = 0; i < guestlist.length; i++) {
    console.log(`dear${guestlist[i]}:\n you are invited yo dinner!\n`);
}
//shrink guestlist
console.log("unfortunately only two people invited for dinner");
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    console.log(`sorry${removeguest},i cant invite you to dinner.`);
}
guestlist.forEach(guestlist => {
    (`dear ${guestlist},you are still invited ti dinner.`);
});
guestlist.splice(0, guestlist.length);
console.log(guestlist);
