var peliculaFav = "Mision imposible";
var Serie = "El brujo";
//operaciones
var programas = "Mis programas favoritos son " + peliculaFav + "y" + Serie;
console.log(programas);
//template string son las comillas invertidas ``
var programas2 = "\nmis programas favoritos son  " + peliculaFav + " y " + Serie + "\n";
console.log(programas2);
var mi_actual_edad = 19;
var edad_futura = "\nEl siguiente a\u00F1o mi edad sera " + (mi_actual_edad + 1) + "\n";
console.log(edad_futura);
//metodos
console.log(programas.charAt(0)); //busca en la posicion que le indiques 
console.log(programas.toUpperCase()); //poner todo en mayuscula
