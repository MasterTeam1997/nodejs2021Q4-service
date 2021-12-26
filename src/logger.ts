import {app, filename} from './app';

export default function activateLogging(){
app.addHook('preHandler', (req, reply, next) => {
    if (req.body) {
      req.log.info({ body: req.body }, 'parsed body')
    }
    next()
  })

process.on('uncaughtException', (error) => {
    console.log(`\n\nReceived uncaught exception, shutting down\n\nLogs are written to ./logs/${filename}\n\nError: `, {error})
    app.log.fatal('received uncaught exception, shutting down', {error})
    app.close().then(() => {
        process.exit(1)
    })
})

process.on('unhandledRejection', (error) => {
    console.log(`\n\nReceived uncaught exception, shutting down\n\nLogs are written to ./logs/${filename}\n\nError: `, {error})
    app.log.fatal(`\n\nReceived uncaught rejection, shutting down\n\nLogs are written to ./logs/${filename}\n\nError: `, {error})
    app.close().then(() => {
        process.exit(1)
    })
})
}
