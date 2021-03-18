//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

function setText() {
    var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var el = document.getElementsByTagName('a');
    el[0].href= 'http://www.sololearn.com';
};