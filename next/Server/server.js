const dbConnection = require('./database')
const user = require('./routes/user')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = 8080

// Sessions
app.use(
	session({
		secret: 'this-is-hard',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, 
		saveUninitialized: false 
	})
)

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Passport
app.use(passport.initialize())
app.use(passport.session()) 

// Routes
app.use('/user', user)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})