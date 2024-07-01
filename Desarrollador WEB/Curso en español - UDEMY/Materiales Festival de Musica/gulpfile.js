import { src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

// export function hola( done ) { // Export nos deja exportarlo a nuestro package.json
   // console.log('Hola desde Gulpfile.js')

    //done()
//} 

const sass = gulpSass(dartSass)

export function css( done ) {

    src('src/scss/app.scss') // Con esto lo importa
        .pipe( sass() ) //Para corroborar que lo encuentra y además para ir ejecutando función por función
        .pipe( dest('src/css') )


    done()
}

export function dev() {
    watch('src/scss/app.scss', css) //Cada vez que ejecute la función de "dev" me va a estar ejecutando este watch
                                    //Esto se va a realizar cada vez que haya un cambio
                                    //Primero se indica en donde y segundo que funcion se va a realizar
}