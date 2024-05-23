function orderSandwich(...item:string[]) {
    console.log("\n you order a sandwichwith the following item:");
    item.forEach(singleItem=>console.log(".  "+ singleItem));
    console.log( "now enjoy your sandwich");
 }
 // call the function
 orderSandwich("bread","tomato","mayo");
 orderSandwich("garlic","tomato","mayonaise","onion");
 orderSandwich("peanut butter","jelly");
 orderSandwich("bread");