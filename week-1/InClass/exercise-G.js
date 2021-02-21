const  numberOfStudent = 9;
const numberOfMentors = 5;

const total = numberOfStudent + numberOfMentors;
const porcentajementors = (numberOfMentors / total) * 100 ;
const porcentajeestudiantes = (numberOfStudent / total) * 100 ;

let azar = Math.random(); 


console.log(` porcentaje de alumnos  ${Math.round(porcentajeestudiantes)}%`);
console.log(` porcentaje de mentores  ${Math.round(porcentajementors)}%`);

azar = azar * total;
console.log(` total alumnos + Mentors multiplicado por numero al azar  ${Math.floor(azar)}` ); 