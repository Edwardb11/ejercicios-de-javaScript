var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
dubujarLinea("black", 10, 100, 10, 300); //lateral izquierdo
dubujarLinea("black", 300, 100, 300, 300); //lateral derecho
dubujarLinea("black", 300, 300, 10, 300); //abajo
dubujarLinea("black", 10, 100, 300, 100); //arriba
dubujarLinea("black", 10, 100, 150, 10); //izquierda del techo
dubujarLinea("black", 300, 100, 150, 10); //derecha del techo

//Puerta
dubujarLinea("blue", 120, 200, 120, 300); //lateral izquierdo
dubujarLinea("blue", 200, 200, 200, 300); //lateral derecho
dubujarLinea("blue", 120, 200, 200, 200); //arriba
function dubujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke();
    lienzo.closePath();

}