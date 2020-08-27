"use strict";

var persona1 = {
  nombre: "Edward",
  edad: 32
};
var persona2 = {
  nombre: 'Arisleyda',
  edad: 30
};
var persona3 = {
  nombre: 'David Jose',
  edad: 11
}; // creando una lista

var personas = [persona1, persona2, persona3]; // console.log(personas);

for (var index = 0; index < personas.length; index++) {
  var element = personas[index];
  console.log(personas[index].nombre + ' -- ' + personas[index].edad); // var persona = personas[index];
  // console.log(`${ persona.nombre } -- ${ persona.edad }`);
}