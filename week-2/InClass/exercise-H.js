function exponential(number) {
  return number * number;
}

function isEven(number) {

   return number % 2 === 0;
   
    //  se retorna un valor boolean es decir la funcion  se convierte en un boolean 
}


for (let number = 6; number <= 19; number++) {    //// number++ is a shortcut for number = number + 1
  exponential(number);
  isEven(number) ;
  if (isEven(number) == true  ){
    console.log(`El exponencia de ${number} es ${exponential(number)}`);
  }else{
    
  }

  }


   
  if ( b  ){
    r = "aaaaaa";
   }
   if ( r == 6 ){
     r = "“Fizz”";
   }
   if ( r == 9 ){
    r = "“Fizz”";
   }
   if ( r == 12 ){
    r = "“Fizz”";
   }
   if ( r == 5 ){
    r = "“Buzz”";
   }
   if ( r == 10 ){
    r = "“Buzz”";
   }
   if ( r == 15 ){
    r = "FizzBuzz";
   }
   console.log(r);