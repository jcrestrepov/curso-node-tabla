
const fs = require('fs');
const colors = require('colors');

//const crearArchivo = ( base = 5 ) => {
    const crearArchivo = async( base = 5, listar = false, hasta=false ) => {

        try {

            let salida ='';
            let consola ='';

            for( let i=1; i<=hasta ; i++) {
                salida += `${base} x ${ i } = ${ base * i}\n`;
                consola += `${base} ${'x'.bold} ${ i } ${'='.bold} ${ base * i}\n`.bgBlack;
            }
            
            if ( listar ) {
            
                console.log('===================='.rainbow.bold);
                console.log('   Tabla del:'.zebra,colors.bold(base));
                console.log('===================='.rainbow.bold);

                console.log( consola );
    
                }
                

            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

            //console.log(`tabla-${base}.txt creado`);
            return`tabla-${base}.txt`;

   
        } catch (error) {
            throw error;
            
        }
    } 
    
module.exports = {
    crearArchivo
}