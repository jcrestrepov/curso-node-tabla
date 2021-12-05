
const{ crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');



console.clear();


crearArchivo( argv.b, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo.bold, 'creado'.underline.bold))
     .catch( err => console.log(err) );
        
