// define the function to magicine names 
function show_magician(magician:string[]) {
    magician.forEach(name=>console.log(name));
}
function make_great(magician:string[]){
    return magician.map(name=>`the great${name}`);
}
   let magician_name = ["Harry poter","Hamza","usman"];
      let great_magicine = make_great(magician_name);
      console.log (great_magicine)