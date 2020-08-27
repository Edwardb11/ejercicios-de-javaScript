function imprimirTabala  (valor, limite){
    for (var index= 0; index < limite; index++){
      var par = index %2;
              if (par ===0)
        {    console.log( valor + "x" + index + "=" + valor * index);
    }
    }
}
imprimirTabala(10,12);
console.log('---');