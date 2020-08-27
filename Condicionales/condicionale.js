var valor1 = prompt("Ingrese un valor");
var valor2 = prompt("Ingrese un valor");
console.log("Ingrese 1 para sumar");
console.log("Ingrese 2 para restar");
console.log("Ingrese 3 para multiplicar");
console.log("Ingrese 4 para division");
console.log("Ingrese 5 para exponenciacion");

var operador = prompt("ingrese 1 para sumar");

if (operador==1){
    c = parseInt(valor1) + parseInt(valor2);
    console.log("El resultado de la suma es",c)
}
else if(operador==2 ){
    c = parseInt(valor1) - parseInt(valor2);
    console.log("El resultado de la resta es",c) 
}

else if(operador==3){
    c = parseInt(valor1) * parseInt(valor2);
    console.log("El resultado de la multiplicacion es",c)

}
else if (operador==4) {
  //  if(valor1 >=1) and (valor2 >=1) 
    c = valor1 / valor2;
      console.log("El resultado de la division es",c);
  //  } else {
    //     console.log("Imposible realizar la operacion");
}

else if (operador ==5){
    c = parseInt(valor1) ** parseInt(valor2);
    console.log("El resultado de la exponenciacion es",c)
}
else {
   
    console.log("Operador no encontrado");
}
