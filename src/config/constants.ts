import enviroment from './enviroments';

if( process.env.NODE_ENV !== 'production'){
    const env =  enviroment;
}

//  Aqui definimos las Variables que usaran en el Proyecto
export const SECRET_KEY= process.env.SECRET || 'KYOCERACURSOGRAPHQL0123456789@!¡';


//  Colecciones de la Base de Datos -> Se usaran para hacer consultas en el Resolver 
export enum COLLECTIONS {
    USERS='users'
}


export enum MESSAGES {
    TOKEN_VERIFICATION_FAILED = 'token no valido inicia sesion de nuevo'
}


/*
 * H = HORAS
 * M = MINUTOS
 * D = DIAS
*/
export enum EXPIRETIME {

    H1 = 60 * 60,
    H24 = 24 * H1,
    M15 = H1 / 4,
    M20 = H1 / 3,
    D3 = H24 * 3 
    
}