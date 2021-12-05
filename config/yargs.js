const { describe } = require('yargs');

const argv = require('yargs')
               .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Que tabla de multiplicar quieres ver'
                    
               })
               .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                    
               })
               .option('h', {
                alias: 'hasta',
                type: 'number',
                default: true,
                describe: 'hasta que numero quiero mi tabla de multiplicar '
                
           })
               .check( ( argv,option ) => {
                    if( isNaN( argv.b) ){
                         throw'La base tiene que se un numero'
                    }
                    return true;
               })
               
               .argv; 

               module.exports = argv;