"use strict"

//********************************
//*** Función Anonima

//(function (){....})();


/*(
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()*/

var saludar = function(nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}