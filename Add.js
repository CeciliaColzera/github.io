
/** 
document.getElementById('boton').onclick = function () {
    console.log("Capturamos el elemento Click");
    document.getElementById("demo").innerHTML="alejandrocolt@gmail.com o (011) 1121820775";
}
*/

document.addEventListener('click', function() {
    console.log("CeciliaColzw desde EventListener");
    document.getElementById("demo").innerHTML = "alejandrocolt@gmail.com o (011) 1121820775";
});
