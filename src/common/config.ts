import * as dotenv from 'dotenv';
import * as path from 'path';

console.log('config dir: ', path.join(__dirname, '../../.env'))

dotenv.config({
    path: path.join(__dirname, '../../.env'),
});

let logLevel = "info";
if(process.env.LOG_LEVEL === "0"){
    logLevel = "error";
}else if(process.env.LOG_LEVEL === "1"){
    logLevel = "warn";
}else if(process.env.LOG_LEVEL === "2"){
    logLevel = "info";
}else if(process.env.LOG_LEVEL === "3"){
    logLevel = "debug";
}else if(process.env.LOG_LEVEL === "4"){
    logLevel = "all";
}


export default {
    PORT: process.env.PORT,
    LOG_LEVEL: logLevel,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    AUTH_MODE: process.env.AUTH_MODE === 'true'
};
