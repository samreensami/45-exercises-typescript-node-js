
function creat_Car(manufacture, model,...options){
let car= {
    
        manufacture:manufacture,
        model : model,
    
    };
options.forEach(options=>{
let [key , value] = options.split(":");
car[key.trim()] = value.trim();
});
return car;
}
let my_Car = creat_Car("toyota","corolla","color:blue","year:2024");
console.log(my_Car);
