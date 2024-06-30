// createElement

const nuevoEnlance = document.createElement('A') //Se recomienda que sea en mayuscula

// Aregar el href

nuevoEnlance.href = 'nuevo-enlace.html'

// Aregar el texto

nuevoEnlance.textContent = 'Tienda virtual'

// Aregar la clase

nuevoEnlance.classList.add('navegacion__enlace')

// Agregarlo al documento

const navegacion = document.querySelector('.navegfacion');
navegacion.appendChild(nuevoEnlance)

console.log(nuevoEnlance)