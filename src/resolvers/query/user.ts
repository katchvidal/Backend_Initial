import { findElement } from './../../lib/crud.database';
import { COLLECTIONS } from '../../config/constants';
import { IResolvers } from '@graphql-tools/utils';



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
  }
};

export default resolverUserQuery;