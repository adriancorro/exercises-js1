/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// forEach() ejecuta la función callback una vez por cada elemento del array. este siempre devuelve el valor undefined y no es encadenable. El típico uso es ejecutar los efectos secundarios al final de la cadena.
let a = arr.forEach(  r => {   let b = r % r ; 

                              if (( r % 15 ) == 0  && ( r % 3 ) == 0 ) {
                                r = "Buzzffff";
                              } 
                              
                               if (( r % 3 ) == 0 ){
                                r = "Fizz";
                               } 

                               if (( r % 5 ) == 0 ){
                                r = "Buzz";
                               } 
                            
                               console.log(r);
}   )



/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
