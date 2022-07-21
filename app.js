
const argv= require('./config/yarge')
const {crearArchivo}=require('./helpers/multiplicar');



console.clear();

crearArchivo(argv.b, argv.l, argv.h)
                    .then(archivo=>console.log(archivo))
                    .catch(err=>console.log(err)); 

