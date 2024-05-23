// define the function to magicine names 
function show_magician(magician:string[]) {
    magician.forEach(name=>console.log(name));
}
function make_great(magician:string[]){
    return magician.map(name=>`the great${name}`);
}
   let magician_name = ["Harry poter","Hamza","usman"];
      let great_magician = make_great(magician_name);
      console.log (great_magician)

      // making a copy of origional arraytrough . slice() function
      let copy_magician_name = magician_name.slice()

      // modify the copy arrayto include "the hreat" with their names

       let copy_great_magician = make_great(copy_magician_name);

       // show both arrays origional and copied

       show_magician(copy_magician_name);

      

