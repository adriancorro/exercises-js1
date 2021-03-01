function esMayuscula(letra){
    let H = letra === letra.toUpperCase();
    console.log(H);
    return H ; 
}

function acceptableUser(user){
    for(let index = 0; index < user.length; index++){
        
        let primeraLetra = user.charAt(index);
        if (esMayuscula(primeraLetra) && user.length > 4  && user.length < 11 ) {
            return console.log("Username valid");
        }else {
            return console.log("Username invalid");
        }
    }
}

console.log(acceptableUser("Adrian"));
