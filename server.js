var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')))
var session = require('express-session')
app.use(session({
	secret: 'grumpy cat',
	resave: false,
	saveUnitialized: true
}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

process.env.PORT = process.env.PORT || 8000
app.listen(8000, function(){
	console.log(process.env.PORT);
})