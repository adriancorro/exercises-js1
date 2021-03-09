let class1 = ["Juan", "Emilio", "Antonio", "Fode", "Gio", "Ronar", "Adrian", "Ato", "Diego", "Jaime","a"];
let class2 = ['Antoni','vincent', 'yogi']  ;
let juntos = class1.concat(class2);

let todosMayuscula = juntos.map(primeraLetraenMayuscula);
let arreglado = todosMayuscula.sort();
console.log(arreglado);

 function check (name, class1, class2, juntos){
     if ( class1.includes(name) ){
        return ` ${name} at the class with  ${class1.join(", ")} y esta con todos que el total de alumnos que son ${juntos.join(", ")}` ;
     }else if (class2.includes(name)){
        return ` ${name} at the class with  ${class2.join(", ")} y esta con todos que el total de alumnos que son ${juntos.join(", ")}` ;
     }else{
        return `  ${name} is not at the class with  ${juntos.join(", ")}` ;
     }
}

function primeraLetraenMayuscula(p){   // funcion covierte todas las primeras letrass de minusculas a mayusculas para poder ordenar correctamente
   let primeraLetra = p.charAt(0).toUpperCase() + p.substring(1,p.length)  ;
   return primeraLetra;
}
 

console.log(check("Adrian",class1,class2,juntos));
 