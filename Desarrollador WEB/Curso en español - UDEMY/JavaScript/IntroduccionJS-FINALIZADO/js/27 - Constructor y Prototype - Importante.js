// POO 

/** Object Literal **/
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/* // Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Compra(cliente, producto) {
    this.cliente = cliente;
    this.producto = producto;
}

// Crear funciones que solo se utilizan en un objeto en especifico.

Producto.prototype.formatearProducto = function() {
    return `${this.nombre} a un precio de $${this.precio}`;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

Compra.prototype.formatearCompra = function () {
    return `${this.cliente.formatearCliente()} ha comprado el producto:
    ${this.producto.formatearProducto()}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Juan', 'De la torre');
const compra1 = new Compra(cliente, producto2)

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(compra1.formatearCompra () ); */


// Registro de compra de un cliente

// Constructores

// Constructor de Producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Constructor de Cliente
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

// Constructor de Compra
function Compra(cliente, productos) {
    this.cliente = cliente;
    this.productos = productos; // Array de productos
}

// Métodos específicos para cada constructor
/** 
*! SEGUNDO SE LLAMA A LOS MÉTODOS PARA CADA PRODUCTO Y PARA CADA CLIENTE.
*/

// Métodos específicos para Producto
Producto.prototype.formatearProducto = function() {
    return `${this.nombre} a un precio de $${this.precio}`;
}

// Métodos específicos para Cliente
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

/**
 * ! TERCERO SE CREA LA LISTA DE detalleProductos 
 * ! CUARTO SE LLENA LA LISTA DE detalleProductos CON CADA PRODUCTO DE LA COMPRA
 * ! QUINTO SE UNEN LOS detalleProductos EN UNA SOLA CADENA, SEPARADA POR NUEVAS LÍNEAS
 * ! SEXTO SE LLENA AL CLIENTE
 * ! SEPTIMO SE COMBINA LA CADENA DEL CLIENTE CON LA LISTA DE detalleProductos
 */

// Método específico para Compra
Compra.prototype.formatearCompra = function () {
    let detalleProductos = this.productos.map(producto => producto.formatearProducto()).join('\n');
    return `${this.cliente.formatearCliente()} ha comprado los siguientes productos:\n${detalleProductos}`;
}

/**  Creación de instancias. 
*! PRIMERO SE CREAN TODAS LAS INSTANCIAS.
*/

// Creación de instancia de Cliente
const cliente1 = new Cliente('Juan', 'De la torre');
const cliente2 = new Cliente('Ivan', 'Daniliuk');

// Creación de instancias de Producto
const producto1 = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);
const producto3 = new Producto('Teclado', 50);

// Creación de instancia de Compra con múltiples productos
const compra1 = new Compra(cliente1, [producto1, producto2, producto3]);
const compra2 = new Compra(cliente2, [producto1, producto2]);


//Uso de los métodos
/**
* ! OCTAVO SE RETORNA LA CADENA COMBINADA
*/
console.log(compra1.formatearCompra());
console.log(compra2.formatearCompra());

