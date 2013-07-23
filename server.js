/**
 * Server file, it creates and initialize the server 
 */
var express = require('express');
var register = require('./routes/register');
var login = require('./routes/login');

var app = express();
// use body parser middleware to parse JSON requests
app.use(express.bodyParser());


//register route
app.get('/register', register.addUser);
//login route
app.get('/login', login.loginUser);

app.listen(3000);
console.log('Listening on port 3000...');