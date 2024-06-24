// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);


/* let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`); */

// Variable para almacenar el total del carrito.
let totalCarrito = 0;

/**
 * Función para agregar un precio al total del carrito.
 * @param {number} precio - El precio del producto a agregar.
 * @returns {number} - El nuevo total del carrito.
 */

// Función para agregar un precio al total del carrito
function agregarCarrito(precio) {
    totalCarrito += precio
    return totalCarrito;
}

/**
 * Función para calcular el impuesto sobre el total.
 * @param {number} total - El total del carrito.
 * @returns {number} - El total con impuestos incluidos.
 */

// Función para calcular el impuesto sobre el total
function calcularImpuesto(total) {
    const tasaImpuesto = 0.15; // La tasa de impuesto es constante y no cambia
    return total * (1 + tasaImpuesto);
}

// Lógica de progrma principal

// Agregar precios al carrito, modificando el valor de totalCarrito cada vez
totalCarrito = agregarCarrito(200);
totalCarrito = agregarCarrito(200);
totalCarrito = agregarCarrito(200);

// Imprimir el total sin impuestos
console.log(`Total sin impuestos: $${totalCarrito}`);

// Calcular el total con impuestos
const totalConImpuestos = calcularImpuesto(totalCarrito); // Este valor no cambiará después de ser calculado

// Imprimir el total con impuestos
console.log(`El total a pagar con impuestos es de: $${totalConImpuestos}`);
