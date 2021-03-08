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


 