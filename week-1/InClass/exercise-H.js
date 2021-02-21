function functionSumar(number_one, number_two, number_three, accion  , nombre  ) {
    let suma = number_one + number_two + number_three;
    let texto =  nombre + accion + suma // unimos los string nombre + accion y traemos el resultado de la variable suma que una operacion aritmetica 
    return texto;
}

function functionMultiplicar(number_one, number_two, number_three, accion  , nombre  ) {
    let multiplica = number_one * number_two * number_three;
    let texto =  nombre + accion + multiplica // unimos los string nombre + accion y traemos el resultado de la variable suma que una operacion aritmetica 
    return texto;
}

function functionRestar(number_one, number_two, number_three, accion  , nombre  ) {
    let resta = number_one - number_two - number_three;
    let texto =  nombre + accion + resta // unimos los string nombre + accion y traemos el resultado de la variable suma que una operacion aritmetica 
    return texto;
}

function functionDividir(number_one, number_two, number_three, accion  , nombre  ) {
    let dividir = number_one / number_two / number_three;
    let texto =  nombre + accion + dividir // unimos los string nombre + accion y traemos el resultado de la variable suma que una operacion aritmetica 
    return texto;
}

console.log(`${functionSumar(4 , 4 , 2, "El resultado de la suma es: " ,  "Adrian " )}`); 
console.log(`${functionMultiplicar(4 , 4 , 2, "El resultado de Multiplicar es: " ,  "Adrian " )}`); 
console.log(`${functionRestar(4 , 4 , 2, "El resultado de Restar es: " ,  "Adrian " )}`); 
console.log(`${functionDividir(4 , 4 , 2, "El resultado de Dividir es: " ,  "Adrian " )}`); 


