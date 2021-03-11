//Estás creando una aplicación de conversión de moneda.
//Cree una función llamada convertir, que toma dos parámetros: la cantidad a convertir y la tasa, y devuelve la cantidad resultante.
//El código para tomar los parámetros como entrada y llamar a la función ya está presente en Playground.
//Cree la función para que el código funcione.

//Entrada de muestra:
//100
//1.1

//Salida de muestra:
//110
//Convertir 100 a razón de 1,1 es igual a 100 * 1,1 = 110.
function main() {

    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    function convert(amount, rate){
    resultado= amount *rate
    return resultado
    }


    console.log(convert(amount, rate));
}