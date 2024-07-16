// let persona =  {
//   nombre: "Diego",
//   apellido: "De Granda",
//   edad: 35
// }

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
//
//
//
//
//
//
// Creamos una instancia de Persona

const persona1 = new Persona("Juan", "Perez", 20);

console.log(persona1);

// Creamos otra instancia de Persona

const persona2 = new Persona("Diego", "De Granda", 35);

console.log(persona2);
//
//
//
//
//
//
// Agregamos una propiedad a la clase Persona
// En este caso la forma en que funciona prototype es que se agrega a todas las instancias de la clase Persona
// Esta propiedad no se agregará a la clase Persona en si, solo al prototipo de la clase del cual se crean las instancias

Persona.prototype.telefono = "555-555-5555";

// Creemos una propiedad solo para una de nuestras instancias

persona1.nacionalidad = "Mexicana";

console.log(persona1);
console.log(persona2);
//
//
//
//
//
//
//
// Creamos un metodo para la clase Persona

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();
