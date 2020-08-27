//Crear un programa que permita ingresar N datos correspondientes al género de N, número de personas
 //y determine el porcentaje de hombres y mujeres que hay.
var n = prompt("digite 1 si es Hombre o 2 si es Mujer");

var m = 0;

var f=0;

if (n == 1) {
    console.log ("usted es hombre");
    m=m+1;

m=m*100/n;
console.log (m);
}

else if (n == 2) {
    console.log ("usted es mujer");
f=f+1;
f=f*100/n;
console.log (f);

}
else{
    console.log("Identifique su sexo");
}





