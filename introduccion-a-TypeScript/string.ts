let peliculaFav:string = "Mision imposible"
let Serie:string = "El brujo"

//operaciones
let programas:string="Mis programas favoritos son " + peliculaFav + "y" + Serie
console.log(programas)


//template string son las comillas invertidas ``
let programas2:string = `
mis programas favoritos son  ${peliculaFav} y ${Serie}
`
console.log(programas2)
let mi_actual_edad:number = 19
let edad_futura:string =`
El siguiente año mi edad sera ${mi_actual_edad +1}
` 
console.log(edad_futura)

//metodos

console.log(programas.charAt(0))  //busca en la posicion que le indiques 
console.log(programas.toUpperCase()) //poner todo en mayuscula
