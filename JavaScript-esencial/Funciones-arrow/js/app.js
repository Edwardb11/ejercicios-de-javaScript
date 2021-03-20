"use strict"

//********************************
//*** Función Arrow | Fat Arrow | Lambda
//Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional,
// pero es limitada y no se puede utilizar en todas las situaciones.

//Funcion simple retornando Hola + el nombre
var saludar = nombre => "Hola " + nombre;
console.log(saludar("Susana"));

//enviando un parametro
var sumar = cantidad => cantidad + 10
console.log(sumar(10));


//enviando dos parametros
var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10, 15));


//haciendo otra operacion dentro de la funcion
var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));


//Sin mandar parametros
var validar = () => {
    return 'Validación correcta';
}
console.log(validar())