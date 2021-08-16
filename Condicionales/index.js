var isGoing = false;
var color = (isGoing ? "green" : "red"); //primer valor antes de los  dos puntos ":" si la condicion es true se evalua y si no pues se evalua lo que esta despues de los dos puntos
console.log(color);

var adult = true;
var preorder = true;
console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");
