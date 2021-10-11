import {
  findOneElement,
  inserOneElement,
} from '../../lib/crud.database';
import { IResolvers } from '@graphql-tools/utils';
import { COLLECTIONS } from '../../config/constants';
import bcrypt from 'bcrypt';

const resolversUserMutation: IResolvers = {
  Mutation: {
    async createUser(_, { user }, { db }) {
      const { email, name, lastname } = user;
      //  -> Usuario Existe?¿
      const userExists = await findOneElement(db, COLLECTIONS.USERS, { email });

      if (userExists) {
        return {
          status: false,
          message: `El email ${email} Ya esta Registrado; ${ name } ${ lastname } intentalo de Nuevo con otro Email `,
          user: null,
        };
      }

      // -> Asignar la fecha en Formato ISO -> registerDate
      user.createAT = new Date().toISOString();

      //  -> Encriptar Password
      user.password = bcrypt.hashSync(user.password, 11);

      //  -> Guardar Documento en la Collecion
      return await inserOneElement(db, COLLECTIONS.USERS, user)
        .then(async () => {
          return {
            status: true,
            message: `Usuario ${name} ${lastname} Ha Sido Registrado Correctamente`,
            user,
          };
        })
        .catch((err: Error) => {
          console.log(err.message);
          return {
            status: false,
            message: ' Error Talk With de Admin ',
            user: null,
          };
        });
    },
  },
};

export default resolversUserMutation;
