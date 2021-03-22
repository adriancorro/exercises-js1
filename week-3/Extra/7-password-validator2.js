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

  // valida si hay mayusculas 

  let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{5,15}$/; 

  var newArrayTiempoReal = [];
         
           let ffgf =  passwords.map( m => {  if (    regex.test(m) ){
                                                // por cada ocurrencia del regex.test(m) añadimos el elemnto a un nuevo array
                                                // Debemos hacer la comprobacion por cada elemento en tiempo real para saber si esta repetido
                                                  newArrayTiempoReal.push(m)
                                                  let df44 = newArrayTiempoReal.filter(a =>  a == m   )
                                                   if( df44.length > 1  ){
                                                    console.log( ` El elemento ${m} está repetido ${df44.length} veces`)
                                                    return false
                                                   }
                                                   return true 
                                              }else{
                                                
                                                newArrayTiempoReal.push(m)
                                                let df44 = newArrayTiempoReal.filter(a => a == m )
                                                if( df44.length > 1 ){
                                                  console.log( ` El elemento ${m} está repetido ${df44.length} veces`)
                                                    return false
                                                   }
                                                    return false
                                               } } ); 
         
                                             
                                              
    

                                              
             return ffgf;
        
         
        
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
