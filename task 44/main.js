function orderSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n you order a sandwichwith the following item:");
    item.forEach(function (singleItem) { return console.log(".  " + singleItem); });
    console.log("now enjoy your sandwich");
}
// call the function
orderSandwich("bread", "tomato", "mayo");
orderSandwich("garlic", "tomato", "mayonaise", "onion");
orderSandwich("peanut butter", "jelly");
orderSandwich("bread");
