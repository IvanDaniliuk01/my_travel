// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); 

// .freeze: es para congelar al objeto, es decir, que no se le pueden agregas más propiedades ni tampoco se le pueden modificar las propiedades ni tampoco eleminar.

// .seal: no permite agregar nuevas propiedades y tampoco permite eliminar las propiedades pero SEAL permite modificar las propiedades existentes. 

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);