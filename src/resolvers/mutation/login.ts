import { findOneElement } from '../../lib/crud.database';
import { COLLECTIONS, EXPIRETIME, MESSAGES } from '../../config/constants';
import { IResolvers } from '@graphql-tools/utils';
import bcrypt  from 'bcrypt';
import JWT from '../../lib/jsonwebtoken';



const resolverLoginMutation: IResolvers = {
    Mutation: {
    
    async login(_, { input }, { db }) {
        try {
            const { email, password } = input;
            
            const user = await findOneElement( db, COLLECTIONS.USERS, { email });
            if( !user ){
                return{
                    status: false,
                    message: 'User not Register, Please Try Again ',
                    token: false
                    
                };
            }
            const validPassword = bcrypt.compareSync( password, user.password);

            if (!validPassword){
                return{
                    status: false,
                    message: 'Email/Password -> Are incorrect ',
                    token: false
                    
                };
            }
            
            if ( validPassword !== null ){
                delete user.password;
                delete user.birthday;
                delete user.registerDate;
                delete user.createAT;
                delete user.birthDay;
            }
                            
            return {
                status: true,
                message: 'Usuario Loggueado Correctamente ',
                token: !validPassword ? null : new JWT().sign( { user }, EXPIRETIME.H24 ),
            };

        } catch (error) {
            return{
                message: 'Talk to Manager',
                status: false,
                token: null
            };
        }
    },
  }
};

export default resolverLoginMutation;