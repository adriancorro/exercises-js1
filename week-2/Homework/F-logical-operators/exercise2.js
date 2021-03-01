/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number){
  if ( number <= 0 ){
    return number =  number <= 0 ;
  }else{
    return number =  number <= 0 ;
  }
}

function isBetween5and10(number2){
  if ( number2 >= 5 &&  number2 <= 10 ){
    return number2 = number2 >= 5 &&  number2 <= 10;
  }else{
    return number2 = number2 >= 5 &&  number2 <= 10;
  }
}

function isShortName(name){
  if (name.length <= 6 ){
    return name = name.length <= 6;
  }else{
    return name = name.length <= 6;
  }
   
}

function startsWithD(nameD){
  if (nameD.charAt(0) == "D" ){
       return nameD = nameD.charAt(0) == "D";
  }else{
    return nameD = nameD.charAt(0) == "D";
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
