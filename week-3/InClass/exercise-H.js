const names = ["Daniel", "James", "Irina",
"Mozafar", "Ashleigh"];

const names2 = ["Ashleigh"];


let w = (b,x) => b.find (c =>  c == x );    

if (w(names,names2) !== undefined) {
  console.log("Found me!")
  console.log( w (names,names2));
}else{
  console.log("Haven't found me :( ")
}



