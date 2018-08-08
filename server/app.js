const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

//Express Setup
const app = express();
app.use(morgan('dev'));

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..','client','dist')));

//bundle route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Assign Port
const PORT = process.env.PORT || 9000;

//Listener
app.listen(PORT, ()=> {
    console.log('the system is running on port:', PORT);
})