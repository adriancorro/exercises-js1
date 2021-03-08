let años = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
let resultado = años.map(condicional);


function condicional(f){
       let edad = 2021 - f;
       let diferencia = 17 -  edad;

       if ( edad >= 17 ){
            return `Los nacidos en el año ${f} pueden manejar.` 
       }else{
               return ` Los nacidos en el año ${f} pueden manejar en ${diferencia} años`
       }
}
console.log(resultado)  ;