"use strict"

//********************************
//*** Parámetros SPREAD

//La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser 
//expandido en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales)
 //son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales 
   // Tipo Objeto) son esperados

//... en la salida de dato

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log('Ingrediente3: ', ingrediente3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));