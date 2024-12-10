import pg from 'pg';
import 'dotenv/config'
const env = process.env.NODE_ENV;

let dbConfig;
if (env === 'dev') {      
    dbConfig = {
        user: process.env.PG_USER, 
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: 5432,
        host: process.env.PG_HOST,
    };    
} else {
    dbConfig = {
        host: process.env.CLOUDSQL_HOST,
        port: process.env.CLOUDSQL_PORT ? parseInt(process.env.CLOUDSQL_PORT, 10) : 5432,
        database: process.env.CLOUDSQL_DB,
        user: process.env.CLOUDSQL_USER_ROADSCANNER,
        password: process.env.CLOUDSQL_PASS_ROADSCANNER,
    };
}

const db = new pg.Pool(dbConfig);

export default db;
