var sueldo;
var x = 1;
var i= 0;
while ( x <=5){
 sueldo = parseInt(prompt("Ingrese su sueldo"));
i= i + sueldo;
 x++;
console.log("El total de sueldo a pagar es", i);
}