var isGoing = false;
var color = (isGoing ? "green" : "red"); //primer valor antes de los  dos puntos ":" si la condicion es true se evalua y si no pues se evalua lo que esta despues de los dos puntos
console.log(color);

var adult = true;
var preorder = true;
console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");


function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"
