"use strict"

//********************************
//*** Calllbacks
//Los callbacks (a veces denominados funciones de retrollamada o funciones callback) no son más
// que un tipo de funciones que se pasan por parámetro a otras funciones. El objetivo de esto es tener
// una forma más legible de escribir funciones, más cómoda y flexible para reutilizarlas
function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3, function (resultado) {
    console.log('Suma', resultado)
},function (resultado) {
    console.log('Resta', resultado)
})


// calcular(d1, d2, func, func)