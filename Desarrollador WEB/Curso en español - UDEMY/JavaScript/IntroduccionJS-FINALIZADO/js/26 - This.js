// This
const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion() { // No se puede utilizar arrow function con THIS para estos casos. Aunque no es recomendable por las buenas prácticas
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();