function esMayuscula(letra){
     
   console.log(letra != letra.toUpperCase());
   console.log( ` que representa letra: ${letra}` );
    return letra != letra.toUpperCase() ; 
}

function acceptableUser(user , tipo){
        
        console.log(`El user  ${user} tiene ${user.length} caracteres y su primera letra empeiza por ${user.charAt(0)}` ); 
        let primeraLetra = user.charAt(0);
        if (esMayuscula(primeraLetra) && user.length > 4  && user.length < 11  && tipo == "admin" ){
            return console.log("Username valid");
        }else {
            return console.log("Username invalid");
        }
    
}
console.log(acceptableUser("adrian", "admin")); 
