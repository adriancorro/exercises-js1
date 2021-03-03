function esMayuscula(letra){
   return  letra === letra.toUpperCase(); 
}

function acceptableUser(user , tipo){
    let primeraLetra = user.charAt(0);
    console.log(`El user ${user} tiene ${user.length} caracteres, su primera letra empeiza por ${user.charAt(0)} y el resultado de comparar letra === letra.toUpperCase() es: ${esMayuscula(primeraLetra)} ` ); 
    
    if (esMayuscula(primeraLetra) && user.length >= 5  && user.length <= 10  && tipo == "admin" ){
        return console.log("Username valid");
    }else {
        return console.log("Username invalid");
    }
}

console.log(acceptableUser("Adrian", "admin")); 