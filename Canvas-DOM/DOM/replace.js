

//Para reemplazar un elemento HTML, se utiliza el método elemento.replaceChild(newNode, oldNode).
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);
};
