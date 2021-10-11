import dotenv from 'dotenv';


//  Ruta de las Variables de Entorno -> Desarrollo 
const enviroment = dotenv.config({
    path:'./src/.env'
});



if( process.env.NODE_ENV !== 'production'){

    if( enviroment.error ){
        throw enviroment.error;
    }

}



export default enviroment;