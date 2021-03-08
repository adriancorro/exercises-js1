/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
// Para a.includes(b) en B no podemos pasar un array por eso se hizo el map para pasar cada elemento del array
var groupIsOnlyStudents = (a,gr) => gr.map( b => a.includes(b)) ; // complete this statement

let falseC = groupIsOnlyStudents(students,group).includes(false);
groupIsOnlyStudents = falseC;

if (  groupIsOnlyStudents !== true ) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
