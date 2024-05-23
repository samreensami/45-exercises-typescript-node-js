function creat_Car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model,
    };
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_Car = creat_Car("toyota", "corolla", "color:blue", "year:2024");
console.log(my_Car);
