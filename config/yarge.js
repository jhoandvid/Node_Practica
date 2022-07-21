
const argv=require('yargs')
        .option('b',{
            alias:'base',
            type:'number',
            describe:'Muestra la tabla en consola',
            demandOption:true,
        })
        .option('l',{
            alias:'listar',
            type:'boolean',
            default:false,
            describe:'Es la base de la tabla de multiplicar'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            default:10
        })
        .check((argv,options)=>{
            if(isNaN(argv.l)){
                throw 'hasta tiene que ser un numero'
            }else{
                return true;
            }
        })
        .check((argv, options)=>{
          
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un numero'
            }else{
                return true;
            }
            
  
        })
        .argv;


module.exports=argv;