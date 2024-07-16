/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos()
}

*/

const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av Insurgentre 187",
    ciudad: "CDMX",
  },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};

// Imprimamos el objeto

console.log(persona);

// Imprimamos la propiedad nombre

console.log(persona.nombre);

// Imprimamos el metodo saludar

persona.saludar();

//
//
//
//
//
// Agrergamos una propiedad al objeto en este caso telefono

persona.telefono = "555-555-5555";

console.log(persona.telefono);

// Agregamos un metodo al objeto

persona.despedir = () => {
  console.log("Adios");
};

persona.despedir();

// Acceder a una propiedad de un objeto anidado / Metodo

console.log(persona.direccion.calle);

//
//
//
//
//
//
// Eliminar una propiedad de un objeto

delete persona.telefono;

console.log(persona.telefono);

// Eliminar un metodo de un objeto

delete persona.despedir;

console.log(persona.despedir());
