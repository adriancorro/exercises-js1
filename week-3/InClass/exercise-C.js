function abracaFunction(yourFunc) {
    console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!" );
   
    const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
    ]; 

    const abracaOutput = yourFunc(abracaArray);
    
    console.log( yourFunc(abracaArray) );
    return abracaOutput;
    }

    // forma 1

    function a(b){
       return b.map(
          function c(d){
            return d.toUpperCase();
          }
       )
    }


  // forma 2

    function arr1(b){
      return b.map(d=>d.toUpperCase());
    }


  // forma 3

     let x = b =>  b.map(d=>d.toUpperCase());

   abracaFunction(a);

   
         
  

  