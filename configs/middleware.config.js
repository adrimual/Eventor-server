const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const cors = require('cors')

module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(cookieParser())
    app.use(cors({
        credentials: true,
        origin: [process.env.PUBLIC_DOMAIN, "https://go-ride-d9ff1.web.app"]
    }))
}