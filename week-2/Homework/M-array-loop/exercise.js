/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var filtered = daysOfWeek.filter(d => String(d).startsWith('T'));
if (filtered != 0){
  console.log(filtered != 0);
}else{
  console.log(filtered != 0);
}


// expected output: true


