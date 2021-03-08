var d = document.getElementById("dibujito");
//getElementById("") es un metodo del document para traer un elemento atravez de su id
var lienzo = d.getContext("2d");
//getContext es un metodo de canvas para traer el contxto a (2d o 3d)

var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#AFFF";

//izquierda inferior
for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (1 + l);
    dubujarLinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + l)
}
//derecha superior
for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (1 + l);
    xi = 10 * l;
    yf = 10 * (l + 1);
    dubujarLinea(colorcito, xi, 0, 300, yf);
    console.log("linea" + l)
}

//Abajo
for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (1 + l);
    xi = 10 * l;
    yf = 10 * (l + 1);
    dubujarLinea(colorcito, 300, 300 - xf, yi, 300);
    console.log("linea" + l)
}

//arriba
for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (1 + l);
    xi = 10 * l;
    yf = 10 * (l + 1);
    dubujarLinea(colorcito, 0, xf, 300 - yi, 0);
    console.log("linea" + l)
}


//dibujarLinea(colorcito, 1, 1, 1, 300);

function dubujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke();
    lienzo.closePath();

}


//Apuntes interesamntes

//lienzo.beginPath(); //Arranca el dibujo
//lienzo.strokeStyle = "blue"; // Atributo de lienzo para asignar un color del dibujo
//lienzo.moveTo(100, 100); //Metodo de punto de inicio del dubujo por coordenadas X _ Y
//lienzo.lineTo(200, 200) //Metodo de punto de fin del dibujo coordenadas X _ Y
//lienzo.stroke(); //Es para dibujar la linea
//lienzo.closePath(); // Termina el dibujo
//console.log(lienzo);
//alert("hola"); //Forma facil para saber si funciona la invocacion