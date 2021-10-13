import JSONWEBTOKEN from 'jsonwebtoken';
import { SECRET_KEY, MESSAGES, EXPIRETIME } from './../config/constants';
import { IJSONWEBTOKEN } from '../interfaces/jsonwebtoken.interfaces';

class JWT {
  private secretKey = SECRET_KEY as string;

  //  Funcionalidad para Generar Token
  sign(data: IJSONWEBTOKEN, expiresIn: number = EXPIRETIME.H24) {
    return JSONWEBTOKEN.sign(
      { user: data.user },
      this.secretKey,
      { expiresIn } //Definimos una constante -> Para manejar los tiempos de expiracion
    );
  }

  //  Funconalidad para descriptar el token y ver que informacion contenia
  verify(token: string) {
    try {
      return JSONWEBTOKEN.verify(token, this.secretKey);
    } catch (error) {
      console.log(error);
      return MESSAGES.TOKEN_VERIFICATION_FAILED;
    }
  }
}

export default JWT;
