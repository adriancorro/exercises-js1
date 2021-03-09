/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// forEach() ejecuta la función callback una vez por cada elemento del array. este siempre devuelve el valor undefined y no es encadenable. El típico uso es ejecutar los efectos secundarios al final de la cadena.
              
                // forma 1
                let a = arr.forEach(  r => {  
                    if (( r % 15 ) == 0  && ( r % 3 ) == 0 ) {
                      r = "Buzzffff";
                    } 
                    if (( r % 3 ) == 0 ){
                    r = "Fizz";
                    } 

                    if (( r % 5 ) == 0 ){
                    r = "Buzz";
                    } 
                    // console.log(r);
                } );
                
                  
                  // forma 2
                  function ccc (array1){
                     return array1.forEach( function (proce) {
                        if (( proce % 15 ) == 0  && ( proce % 3 ) == 0 ) {
                          proce = "Buzzffff";
                        } 
                        if (( proce % 3 ) == 0 ){
                          proce = "Fizz";
                        } 
      
                        if (( proce % 5 ) == 0 ){
                          proce = "Buzz";
                          
                        } 
                        console.log(proce);
                        return proce;
                        
                      } )
                  }
                     console.log(ccc(arr)); 

                  // forma 3
              let  funcionA  =  arrayN => arrayN.map( EachArray => { 
                                              if (( EachArray % 15 ) == 0  && ( EachArray % 3 ) == 0 ) {
                                                EachArray = "Buzzffff";
                                              } 
                                              if (( EachArray % 3 ) == 0 ){
                                                EachArray = "Fizz";
                                              } 
                            
                                              if (( EachArray % 5 ) == 0 ){
                                                EachArray = "Buzz";
                                              } 
                                              console.log(EachArray);
                                          } ) 
                                        //  console.log(funcionA(arr)); 

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
