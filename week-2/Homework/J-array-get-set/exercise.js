/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(parametro1) {

  
    return parametro1[0] ; // complete this statement
  
    

}

/* La propiedad length de un objeto que es una instancia de tipo Array
 establece o devuelve la cantidad de elementos en esa matriz. */

function last(parametro2) {
  return parametro2[parametro2.length -1]; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
