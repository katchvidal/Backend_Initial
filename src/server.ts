import { ApolloServer } from 'apollo-server-express';
import { graphqlHTTP } from 'express-graphql';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import chalk from 'chalk';
import enviroments from './config/enviroments';
import Database from './lib/database';
import schema from './schema';
import { IContext } from './interfaces/context.interfaces';


//  Configuracion de las variables de entorno -> Lectura
if( process.env.NODE_ENV !== 'production'){
    const env = enviroments;
    //console.log( env );
    
}

async function server() {

    const PORT = process.env.PORT;
    const app = express();
    app.use( cors() );
    app.use(compression());
    const database = new Database();

    const db = await database.init();

    const context = async({req, connection} : IContext ) => {
        const token = req ? req.headers.token : connection.token;

        return { db, token };
    };
    
    const server = new ApolloServer({
        schema,
        introspection:true,
        context
    });
    await server.start();
    server.applyMiddleware({app});

    //  Si solo quisieramos Usar -> GraphQL-Express podriamos borrar el servidor de Apollo
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));
 
    app.listen(
        { port: PORT },
        () => console.log('Backend Server URL:',chalk.greenBright(`http://localhost:${PORT}/graphql`) )
    );
    
    
}

server();