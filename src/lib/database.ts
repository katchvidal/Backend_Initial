import chalk from 'chalk';
import { MongoClient } from 'mongodb';



class Database {
    async init(){
        const MONGO_DB = process.env.MONGOCDN || '';
        const client = await MongoClient.connect(
            MONGO_DB
        );

        const db = client.db();

        if( client ){

            console.log(` ${chalk.greenBright('==================DATABASE===================')}`);    
            console.log(`STATUS: ${chalk.greenBright('ONLINE')}`);    
            console.log(`DATABASE NAME: ${chalk.greenBright(db.databaseName)}`);    
            console.log(` ${chalk.greenBright('==================DATABASE===================')}`);    

        }

        return db;
    }
}

export default Database;