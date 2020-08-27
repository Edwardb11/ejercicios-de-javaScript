function calculadorNota (nota){
var notaletra = ' ';
    if ((nota>=90) && (nota <=100)){ 
        notaletra = "A";
    }
    else if (((nota>=80) && (nota <=89))){ 
        notaletra = "B";
    }
    else if (((nota>=70) && (nota <=79)) ){ 
        notaletra = "C";
    }
    else if (((nota>=60) && (nota <=69)) ){ 
        notaletra = "D";
    }
    else if  (nota <=59) { 
        notaletra = "F";
    }
    else { notaletra = "valor no encontrado";
}
return (notaletra);

}
letraFinal = calculadorNota(50);
console.log("El resultado es " + letraFinal);