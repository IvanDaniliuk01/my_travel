
// Métodos de propiedad. Acá por lo que entiendo es que estamos creando un objeto con varias funciones dentro del mismo que son métodos
// de un objeto.

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
    borrarCancion: function(id) {
        console.log(`Eliminando la canción: ${id}`)
    }
}

/* reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
} */

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
reproductor.borrarCancion(3840)