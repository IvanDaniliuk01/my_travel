
// Declaración de Función
sumar();
function sumar() {
    console.log(10 + 10);
}



// Expresión de la función, esta forma la considera como una variable
// JS primero ejecuta las funciones y por otro lado ejecuta el código, entonces definir const sumar2 hace referencia a definir una variable
sumar2();
const sumar2 = function() {
    console.log( 3 + 3);
}


