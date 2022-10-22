process.on('uncaughtException', (error) => {
    console.log('UNCAUGHT EXCEPTION!');
    console.info(error);
    console.info('Server Closed!')
    process.exit(1)
})

import express from 'express'
import config from './config'
import Loaders from './loaders'
import logger from './loaders/logger'

let server:any;
const app = express()
Loaders({expressApp: app}).then(() => {
    server - app.listen(config.port, () => {
        logger.info(`Server started on port ${process.env.PORT}`)
    })
})

process.on('unhandledRejection', (error: Error) => {
    logger.info('UNHANDLED REJECTION');
    logger.info(error)
    if(server) {
        server.close(() => {
            logger.info('Server Closed');
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
})

process.on('SIGTERM', () => {
    logger.info('SIGTERM RECEIVED!')
    if(server) {
        server.close(() => {
            logger.info('Server Closed!')
        })
    }
})