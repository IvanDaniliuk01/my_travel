const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas }; // Las buenas prácticas mencionan que no debemos modificar objetos ya existentes si no que debemos mutarlos.

console.log(producto);
console.log(nuevoProducto);