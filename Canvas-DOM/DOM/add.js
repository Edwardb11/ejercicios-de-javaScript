//Utiliza los métodos siguientes para crear nuevos nodos:
//elemento.cloneNode() clona un elemento y retorna el nodo resultante.
//document.createElement(elemento) crea un nuevo nodo con el elemento correspondiente.
//document.createTextNode(texto) crea un nuevo nodo de texto.
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};

