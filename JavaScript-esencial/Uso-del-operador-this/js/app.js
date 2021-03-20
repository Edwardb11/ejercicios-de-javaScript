"use strict"

//********************************
//*** Uso del operador this

const boton = document.querySelector('.boton');

/*
boton.addEventListener('click', function () {
    console.log(this.innerHTML); acceder al contenido que existe ahi se usa innerHTML
})
*/


//usando la funcion de flecha y redireccionando a google
boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com";

})