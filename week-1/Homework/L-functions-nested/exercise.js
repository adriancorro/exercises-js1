var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

let numeroDeMentores = 5;
let porcentajeAlumnos = 65;
let porcentajeMentores = 35;

let totalMentoresMasEstudiantes = numeroDeMentores + numeroDeEstudiantes() ;
let calculo4 = (numeroDeMentores / totalMentoresMasEstudiantes  ) * 100 ;
let calculo5 = (numeroDeEstudiantes() / totalMentoresMasEstudiantes  ) * 100 ;

function numeroDeEstudiantes(date1){
    
    let calculo1 = numeroDeMentores * porcentajeAlumnos ;
    let totalEstudiantes = calculo1 / porcentajeMentores;
    return Math.round(totalEstudiantes);    
}

function stringMessage(date2){
    let stringMessageFinal = `
        Total de numero de estudiantes es: ${numeroDeEstudiantes(porcentajeMentores)}
        Total porcentaje de profesores es:  ${ Math.round(calculo4)}%
        Total porcentaje de alumnos es:  ${ Math.ceil(calculo5)}%
    `
    return stringMessageFinal;                           
}
 
    console.log(stringMessage());

