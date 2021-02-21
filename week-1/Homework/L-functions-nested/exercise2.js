function uppercase(mentor1, mentor2, mentor3, mentor4, mentor5 ){

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

let string1 = `
  ${saludo()} ${mentor1}
  ${saludo()} ${mentor2} 
  ${saludo()} ${mentor3} 
  ${saludo()} ${mentor4} 
  ${saludo()} ${mentor5} `;

return string1.toUpperCase();
}

function saludo(date2){
    let saludoString = "hola";
   return saludoString;
}

console.log(uppercase());