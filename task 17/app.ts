let guestlist = ["sam","sami","safdar","ali"]
console.log(guestlist);
let cantcome = guestlist[0];
 console.log("\n sam cant come \n");
 // remove & adding any value
guestlist.splice(0,1,"barzah");
console.log("Good news!we have found a bigger dinner table,somore space is available,thatswhy our new guest are:\n");
// adding value in begining
guestlist.unshift("zoha");
// get middle index middle of array
let middleindex: number= (guestlist.length/2);
// put value in middle index
guestlist.splice(middleindex,0,"a.r ansari");

console.log("update list of guest");
guestlist.forEach(oneguest=>console.log(`assalamo alaikum\n${oneguest}\n,\nwould u like to dinner with me\n`));
console.log("unfortunatly,the new dinner table cant arrive on time,so i will invite only two person for dinner with me");
// while loop function repeat again & again until specific condition,pop function remove value from last
while(guestlist.length>2){
    let removedguest = guestlist.pop();
    console.log(`sorry,\n${removedguest}\ni cant invite you on dinner`);
}console.log("invitation to the last two guest");
guestlist.forEach(lasttwo =>console.log(`luckey person are${lasttwo}\nyou are still invited to dinner`));
// remove left over two guest from array
guestlist.pop();
guestlist.pop();
console.log("empty list" ,guestlist);







    
