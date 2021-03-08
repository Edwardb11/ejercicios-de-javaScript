var texto = document.getElementById("texto_Linea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", DibujoPorClik);
//sirve para reaccionar a un evento 
//pide dos parametros primero a que evento tiene que reaccionar y luego que funcion tiene que llamar

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
//alert(ancho);


function dubujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke();
    lienzo.closePath();

}

function DibujoPorClik() {
    //var xxx = parseInt(texto.value); //atravez de value que es un atributo obtengo el valor que contiene mi caja de texto
    //alert('bien' + xxx);
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#AFFF";
    var espacio = ancho / lineas;

    //izquierda inferior
    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (1 + l);
        dubujarLinea(colorcito, 0, yi, xf, 300);
        console.log("linea" + l)
    }

    dibujarLinea(colorcito, 1, 1, 1, ancho - 1)
    dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1)

}