// Eventos

// * FUNCION IMPORTANTE document.addEventListener

// load espera a que el JS y los archivos que dependen del HTML estén listos

// DomContentLoaded solo espera que este listo el HTML --> usualmente se utiliza este.


// Relacionar elementos de nuestro HTML y asignarles un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e) {
    console.log(e);
    e.preventDefault();
    console.log('enviando formulario');
});

// Eventos con el teclado

const nombre = document.querySelector('#nombre')

nombre.addEventListener('input', function (e){
    console.log(e.target.value)
});