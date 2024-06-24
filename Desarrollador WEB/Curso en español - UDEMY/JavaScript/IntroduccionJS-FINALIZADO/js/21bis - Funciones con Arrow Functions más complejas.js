// Función para verificar si un número es primo
const esPrimo = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Función para encontrar todos los números primos en un rango
const encontrarPrimos = (inicio, fin) => {
    const primos = [];
    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
};

// Rango para buscar números primos
const inicio = 10;
const fin = 20;

// Encontrar y mostrar los números primos en el rango
const primos = encontrarPrimos(inicio, fin);
console.log(`Números primos entre ${inicio} y ${fin}:`, primos);
