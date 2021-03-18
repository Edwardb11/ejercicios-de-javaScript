"use strict"

//********************************
//*** Parámetros REST
//La sintaxis del parámetro rest permite que una función acepte un número indefinido de argumentos como una matriz, proporcionando una forma de representar funciones variadas
//La definición de una función solo puede tener un ...restParam .

//foo(...one, ...wrong, ...wrong)
//El resto del parámetro debe ser el último parámetro en la definición de la función.

//foo(...wrong, arg2, arg3)
//foo(arg1, arg2, ...correct)


function cocinar(...masIngredientes) {

    console.log("masIngredientes", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Chile");