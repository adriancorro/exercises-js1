function functionSumar(number_one, number_two, number_three, accion  , nombre  ) {
    let suma = number_one + number_two + number_three;
    let texto =  nombre + accion + suma // unimos los string nombre + accion y traemos el resultado de la variable suma que una operacion aritmetica 
    return texto;
}



console.log(`${functionSumar(100 , 200 , 300, "El resulatado de la suma es: " ,  "Adrian " )}`); 