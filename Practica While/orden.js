var i = 1;
var mayor = 0;
var menor = 1000;
var num;
while  (i <=10){
num= parseInt(prompt("Ingrese un numero" + i));

    if ( num > mayor){
        mayor = num;
    }
    if ( num < menor){
        menor = num;
    }
        i++;
console.log("el menor es ", menor, "y el mayor es ", mayor );

}