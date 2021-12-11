import userRoute from './routes/user.route'
import boardRoute from './routes/board.route'
import taskRoute from './routes/task.route'

import config from './common/config';
import app from './app';

app.register(userRoute);
app.register(boardRoute);
app.register(taskRoute);

app.listen(config.PORT);

let a = 1;
a = true
a = "text"
console.log(a)
