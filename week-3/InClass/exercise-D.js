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

    let x = b => b.map( x => x.toUpperCase()  )   ; 
    let a =  y => y.sort();
    abracaFunction(x);