var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
};
var x = person.age;
var y = person['age'];


document.write(x);
document.write(y);

//constructor 
function persona (nombre, edad, color) {
 
    this.name = nombre;
    this.age = edad;
    this.favColor = color;
  }

function person (name, age) {
    this.name = name;
    this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);

document.write(John.age);

//Gerente de contacto


//E//stás trabajando en una aplicación de Contact Manager.
//Ha creado el constructor del objeto de contacto, que tiene dos argumentos, nombre y número.
//Debe agregar un método print () al objeto, que generará los datos de contacto en la consola en el siguiente formato: nombre: número
//el código dado declara dos objetos y llama a sus métodos print (). Complete el código definiendo el método print () para los objetos.
function Contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function (){
        var x = this.name
        var y = this.number 
        console.log(x+": "+y)
    }
 }                 

var a = new Contact("David", 12345);
var b = new Contact("Amy", 987654321)
a.print();
b.print();

// para imprimir la hora, minuto y segundo
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);



//Gerente de la tienda


//Está trabajando en un programa Store Manager, que almacena los precios en una matriz.
//Necesita agregar funcionalidad para aumentar los precios en la cantidad dada.
//La variable de aumento se toma de la entrada del usuario. Necesita aumentar todos
// los precios en la matriz dada en esa cantidad y enviar a la consola la matriz resultante.

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    for(var i=0;i<=prices.length-1;i++){
        prices[i]=prices[i]+increase;
    }
    console.log(prices);
}