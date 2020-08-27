var i= 1;
var suma = 0;
var nota1 = 0;
while  (i <=5){
    var nota1 = parseInt(prompt("Ingrese su nota" + i));
    if ((nota1 >=0) & (nota1<=100)){
       
        suma = suma + nota1; 
        i++;
    }
    else {console.log ("repita su nota");
} 
  
}
suma = suma / 5;
console.log("Su promedio es "  + suma )

if ((suma>=90) && (suma <=100)){ 
    console.log("Tu nota es A");
}
else if (((suma>=80) && (suma <=89))){ 
    console.log("Tu nota es B");
}
else if (((suma>=70) && (suma <=79)) ){ 
    console.log("Tu nota es C");
}
else if (((suma>=60) && (suma <=69)) ){ 
    console.log("Tu nota es F");
}
else { console.log("NADA");}


