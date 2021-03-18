
//Para remover un elemento HTML, debes seleccionar el padre del elemento y utilizar el método removeChild(node).
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.removeChild(child);
};

