/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

// forma 1 
/* function findLongNameThatStartsWithA (names){
  return names.find  (  function b (c) {
   return c.startsWith('A') && c.length > 7 ; 
  })
} */

// forma 2
 let findLongNameThatStartsWithA = names => names.find ( cond => cond.startsWith('A') && cond.length > 7 )
    

 
var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);



console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
