import { findElement, findOneElement } from './../../lib/crud.database';
import { COLLECTIONS, MESSAGES } from '../../config/constants';
import { IResolvers } from '@graphql-tools/utils';
import JWT from '../../lib/jsonwebtoken';




const resolverUserQuery: IResolvers = {
  Query: {
    
    async users(_, args, { db }) {
      try {
        return {
          status: true,
          message: ' Ha continucion devoleremos los Usuarios Registrados Correctamente ',
          users: await findElement( db, COLLECTIONS.USERS )
        };
      } catch (error) {
        console.log(error);
        return {
          status: false,
          message:
            'Error Talk to Manager ',
          users: [],
        };
      }
    },

    async user(_, args, { token, db  }){

      let info = new JWT().verify( token );
      if( info === MESSAGES.TOKEN_VERIFICATION_FAILED ){
        return{
          status: false,
          message: info,
          user: null,
        };
      }   
      const { email } = Object.values( info )[0];
      const usuario = await findOneElement( db, COLLECTIONS.USERS, { email }); 
      return{
        status : true,
        message: 'Usuario Autenticado Correctamente Mediante Token',
        user: usuario
      };
      
    }
    }
  };

export default resolverUserQuery;