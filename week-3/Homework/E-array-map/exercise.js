// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let a = mult => mult.map( b => b * 100 );
let x = numbers.map(b => b * 100);

 console.log (typeof x);
 console.log ( x);
console.log(a(numbers))     ;  