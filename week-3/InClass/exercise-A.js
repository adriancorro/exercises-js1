let a = ["A", "B", "C"];

console.log(a);

let b = "D";

let c  = a.push(b);

a.splice(0,0,'X');

console.log(a);
console.log(`que tipo de dato es:  ${typeof a}  `);
console.log(typeof b);
console.log(c);


var persona = {
    nombre : {
        pila: 'Bob',
        apellido: 'Smith'
      },
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
      console.log(this.nombre.pila[0] + '' + this.nombre.pila[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '. y su altrua es de ' + this.altura );
    },
    saludo: function() {
        console.log('Hola, Soy '+ this.nombre.pila[0] + '. ');
    }
  };

console.log(persona.nombre.pila)
persona.bio()
persona.saludo()

persona.edad = 45;
persona['nombre']['apellido'] = 'Cratchit';

persona.edad
persona['nombre']['apellido']
persona.bio()
console.log(persona.nombre.apellido)


var nombrePerzonalizado = 'altura';
var valorPerzonalizado = '1.75m';
persona[nombrePerzonalizado] = valorPerzonalizado;
console.log(persona.altura)
persona.bio()
// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics#establecer_miembros_de_objetos