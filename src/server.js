const { PORT } = require('./common/config');
const app = require('./app');
app.register(require('./routes/user.route.js'))
app.register(require('./routes/board.route.js'))
app.register(require('./routes/task.route.js'))
app.register(require('./routes/other.route.js'))

app.listen(PORT);