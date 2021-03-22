/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/


function validatePasswords(passwords) {

  // valida si hay mayusculas , numero, simbolos, numero de caracteres. 

  let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{5,15}$/; 
  
   /* Con El método test() sabemos si existe la ocurrencia y Devuelve true o false.
      Para saber hay elementos repetidos en el array debes hacer una iteraccion en tiempo real
      por cada ocurrencia en regex.test(m) agregamos un elemento al  array newArrayTiempoReal
      la funcion  checkerDuplicador() va comprando si hay array duplicados
      Se llama la funcion por cada iterador del map y gracias a if( m == checkerDuplicador(newArrayTiempoReal) )
   */
  var newArrayTiempoReal = [];

           let validator =  passwords.map( m => {  if (    regex.test(m) ){
                                              
                                                    newArrayTiempoReal.push(m)
                                                   // se llama a la funcion por cada iterador del map checkerDuplicador() 
                                                   if( m == checkerDuplicador(newArrayTiempoReal) ){
                                                    return false
                                                   }
                                                   return true 
                                                    
                                              }else{
                                                newArrayTiempoReal.push(m)  
                                                if( m == checkerDuplicador(newArrayTiempoReal) ){
                                                    return false
                                                   }
                                                    return false
                                               } } ); 
         
                                             
                                              
    

                                                                    
             return validator;
        
         
        
}
    //la funcion  checkerDuplicador() va comprando si hay array duplicados
     function checkerDuplicador(pnewArrayTiempoReal){
            var repetidos = [];
            var temporal = []; 
           
            pnewArrayTiempoReal.map((value,index)=>{
            temporal = Object.assign([],pnewArrayTiempoReal); //Copiado de elemento
            temporal.splice(index,1); //Se elimina el elemnto q se compara
            /**
             * Se busca en temporal el elemento, y en repetido para 
             * ver si esta ingresado al array. indexOf returna
             * -1 si el elemento no se encuetra
             **/
            if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)      repetidos.push(value);
            });
            return repetidos
     }

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
