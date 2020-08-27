var flores = ['Rosa', 'Lirio ', 'Girasol'];

var estudiantes = ['Miguel Etarlin', 'Enmanuel Ruiz', 'Jose Daniel',
'Joan Guerrero', 'Miguel Alberto Perez', ' Rafael Henriques', 'Marcos Jose', 'Edward Brito', 'Eudis ', ' Yessica Villavizar',
'Julio Henriques','Randi Mora', 'Hector Aramboles'];

console.log(estudiantes);
console.log(estudiantes[7]);
console.log(estudiantes.sort());
console.log(estudiantes.length);

console.log(flores);
estudiantes.push(prompt("Ingrese un elemento para agregar en flores"));
flores[1]= "Piña";

for (var index= 0; index < estudiantes.length; index++){
    console.log(estudiantes[index]);
}

