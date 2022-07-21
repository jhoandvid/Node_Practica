
const fs=require('fs');
const color=require('colors');


const crearArchivo=async(base=5, listar=false,hasta)=>{

    try {
       
        let salida='';
        for(let i=1; i<=hasta; i++){
            salida+=`${base} X ${i} = ${base*i}\n`;

            
        }

        if(listar){

            console.log('======================='.rainbow)
            console.log(`=======Tabla del ${base}:====`)
            console.log('======================='.rainbow)
            console.log(salida);

        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
       return color.america(`Tabla-${base}.txt creada`)
        
    } catch (error) {
        throw error;
    }

}


module.exports={
    crearArchivo
}