//El caracol sube 7 pies cada día y retrocede 2 pies cada noche.
//¿Cuántos días tardará el caracol en salir de un pozo con la profundidad dada?

//Entrada de muestra:
//31

//Salida de muestra:
//6

//Explicación: Analicemos la distancia que recorre el caracol cada día:
//Día 1: 7-2 = 5
//Día 2: 5 + 7-2 = 10
//Día 3:10 + 7-2 = 15
//Día 4:15 + 7-2 = 20
//Día 5:20 + 7-2 = 25
//Día 6:25 + 7 = 32
//Entonces, en el día 6, el caracol alcanzará los 32 pies y saldrá del pozo durante el día, sin resbalarse esa noche.
//Sugerencia: puede usar un bucle para calcular la distancia que cubre el caracol cada día y romper el bucle cuando alcance la distancia deseada.

function main() {
    var depth = parseInt(readLine(), 10); //equals 42 in this example
     var x = 0; //milesDone
     var day = 0; //dayCount
        for(i=0 ; i < depth ;i ++){
                        if (x<depth) {
                                x += 7;
                                if (depth > x) {
                                x -= 2;        
                                }
                                day++ 
                              
                        } else {
                               console.log(day)
                                break;
                        }  
                }  
  }