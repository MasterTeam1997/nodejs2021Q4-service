import userRoute from './routes/user.route'
import boardRoute from './routes/board.route'
import taskRoute from './routes/task.route'

import config from './common/config';
import {app} from './app';
import activateLogger from "./logger"

app.register(userRoute);
app.register(boardRoute);
app.register(taskRoute);
if(config.PORT == null){
    console.log("PORT is not defined")
    process.exit(0)
}else{
    app.listen(config.PORT);
    activateLogger();
}

// throw Error('Oops!')
// Promise.reject(Error('Oops!'));