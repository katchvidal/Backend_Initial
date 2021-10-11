import JSONWEBTOKEN from 'jsonwebtoken';
import { SECRET_KEY, MESSAGES, EXPIRETIME } from './../config/constants';
import { IJSONWEBTOKEN } from '../interfaces/jsonwebtoken.interfaces';


class JWT {
    private secretKey = SECRET_KEY as string;

    sign(data: IJSONWEBTOKEN, expiresIn : number = EXPIRETIME.H24 ){
        return JSONWEBTOKEN.sign(
            { user : data.user },
            this.secretKey,
            { expiresIn } //Definimos una cosntante -> Para manejar los tiempos de expiracion 

        );
    }

    verify( token : string ){
        try {

            return JSONWEBTOKEN.verify( token, this.secretKey);

        } catch (error) {

            console.log( error );
            return MESSAGES.TOKEN_VERIFICATION_FAILED;
    
        }
    }
}

export default JWT;