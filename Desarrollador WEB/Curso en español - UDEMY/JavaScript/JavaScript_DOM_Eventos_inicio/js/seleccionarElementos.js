// querySelector

const heading = document.querySelector('.header__texto h2') // 0 o 1 elementos. Se limita a uno.
console.log(heading)

// También podemos invocarlo con el ID (ya que sabemos que esto es un valor único)

const heading_especifico = document.querySelector('#heading_especifico') // 0 o 1 elemento
console.log(heading_especifico) // Mejor práctica
// heading_especifico.textContent = 'Nuevo Heading'
// heading_especifico.classList = 'Nueva clase'

//* Podemos ver que podemos modificar los elementos de HTML en JS


// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces[0]) // De todos los elementos seleccionamos uno en particular
// enlaces[0].textContent = 'Nuevo texto para enlace'
// enlaces[0].href = 'google.com'
// enlaces[0].classList.add('nueva-clase-de-prueba')

// getElementById. NO SE UTILIZA TANTO HOY EN DIA

// const heading2 = document.getElementById('ID') NO HACE FALTA UTILIZAR NUMERAL
// console.log(heading2)