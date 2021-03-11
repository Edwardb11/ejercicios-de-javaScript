// Planificador de viajes


// Necesitas planificar un viaje por carretera. Viaja a una velocidad promedio de 40 millas por hora.
// Dada una distancia en millas como entrada (el código para tomar la entrada ya está presente), envíe a la consola el tiempo que le tomará recorrerlo en minutos.

// Entrada de muestra:
// 150

// Salida de muestra:
// 225
// Explicación: Se necesitarán 150/40 = 3,75 horas para cubrir la distancia, lo que equivale a 3,75 * 60 = 225 minutos.
function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    var miles  = 40;
    var minutes = distance / miles; 
    console.log(distance / 40 * 60)
  
    
}