

for (let i = 0; i <= 10; i++ ){
   let m = i + i ;
   //console.log(`La operacion es de ${i} + ${i} = ${m}  `);
}

for (i = 0; i <= 10 ; i++){
    let x = i + i;
    let y = x + x;
    console.log(`La operacion es de ${x} + ${x} = ${y}  `);
    console.log(typeof y);
}

let y; 

function a(n,e){
  let x = 2022 - e;
   y = ` La persona con nombre ${n} nacio en el año ${x}`;
  return y; 
}

a("adrian", 28);

console.log(y);

for (let  i = 8; i >=0;  i = i-1 ){
   console.log(i);
}