let arrayN = [100, "iSMael", 55, 45, "sANyiA", 66,
"1JaMEs", "eLAmIn", 23, "IsMael", 67, 19,
"ElaMIN"]; 

8
  let f = a => a.filter(  b => typeof b == "string" );

  let UpperCase = f(arrayN).map( n => n.toUpperCase());

  console.log(f(arrayN))  ;
  console.log(UpperCase) ;

