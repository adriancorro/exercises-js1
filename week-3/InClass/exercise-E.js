let años = [1964, 2008, 1999, 2005, 1978,1985, 1919];
let añoActual  = 2021;

// forma 1

function a (b,x){
   return b.map  (
      function c (d){
         return x - d
      } 
   )
}

// forma 2
let w = (b,x) => b.map( d => x - d); 


console.log( w (años,añoActual));