function añoNacimiento(edad){
  let añoActual = 2021;
  let age = añoActual - edad;
  return age;
}

function concatenacion(name, edad){
  let stringFinal = `La persona con nombre ${name} y edad ${edad} nacio en el año: ${añoNacimiento(edad)}`;
  return stringFinal;
}

console.log(`tu año de nacimiento es: ${añoNacimiento(28)} `);
console.log(concatenacion("adrian", 28));
