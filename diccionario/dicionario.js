function descubrirpersona (p) {
    console.log(p.nombre + 'tiene una edad de ' + p.edad + ' y mide  ' + p.estatura );

}
var persona = {
nombre: prompt("Ingrese su nombre"),
edad: 18,
estatura: 1.75,
profecion: 'ISC'

}
descubrirpersona(persona);
console.log(persona);
console.log(persona.nombre);