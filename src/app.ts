import fastify from 'fastify';
import config from './common/config';

const currentdate = new Date(); 
const dateTime =  
                 `${currentdate.getFullYear()  }-${  
                 currentdate.getMonth()+1   }-${ 
                 currentdate.getDate()  }_${
                 currentdate.getHours()  }-${  
                 currentdate.getMinutes()  }-${ 
                 currentdate.getSeconds()}`;


const filename = `logfile_${dateTime}`

const app = fastify({
    logger: {
        level: config.LOG_LEVEL,
        file: `./logs/${filename}`
    }
});
export {app,filename}