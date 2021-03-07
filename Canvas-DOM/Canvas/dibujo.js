var d = document.getElementById("dibujito");
//getElementById("") es un metodo del document para traer un elemento atravez de su id
var lienzo = d.getContext("2d");
//getContext es un metodo de canvas para traer el contxto a (2d o 3d)

dubujarLinea("black", 10, 200, 200, 20, 20);

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