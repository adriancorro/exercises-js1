function esMayuscula(letra){
    let H = letra === letra.toUpperCase();
   console.log(H);
    return H ; 
}

function acceptableUser(user , tipo){
    for(let index = 0; index < user.length; index++){
        console.log(user.length);
        console.log(user[0]);   // (user[index]  seria los mismo
        let primeraLetra = user.charAt(index);
        if (esMayuscula(primeraLetra) && user.length > 4  && user.length < 11  && tipo == "admin" ){
            return console.log("Username valid");
        }else {
            return console.log("Username invalid");
        }
    }
}

console.log(acceptableUser("Adrian", "admin"));