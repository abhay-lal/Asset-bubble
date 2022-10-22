import express from 'express'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import passport from 'passport'
import {errorConverter, errorHandler} from '../middlewares/error'
import authLimiter from '../middlewares/rateLimiter'
import jwtStrategy from '../config/passport'
import ApiError from '../utils/ApiError'
import config from '../config'
import morgan from './morgan'
import routes from '../routes'

const xss = require('xss-clean')
const compression = require('compression')
const cors = require('cors')
const httpstatus = require('http-status')

export default ({ app }: {app: express.Application}) => {
    if(config.env !== 'test') {
        app.use(morgan.successHandler)
        app.use(morgan.errorHandler)
    }

    app.use(helmet())

    app.use(express.json({ limit: '100kb' }))

    app.use(express.urlencoded({extended: true, limit: '10kb'}))

    app.use(xss())
    app.use(mongoSanitize())

    app.use(compression())

    app.use(cors())

    app.use(passport.initialize())
    passport.use('jwt', jwtStrategy)

    if(config.env === 'production') {
        app.use('/auth', authLimiter)
    }
    app.use('/', routes)

    app.use((req, res, next) => {
        next(new ApiError(httpstatus.NOT_FOUND, 'Not found'))
    })

    app.use(errorConverter)

    app.use(errorHandler)
}