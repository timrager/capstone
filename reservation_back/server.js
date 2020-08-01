///////////////////////////////////
// SET UP EXPRESS - DEPENDENCIES //
///////////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')
const app = express();
const methodOverride = require('method-override')
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;

////////////////
// MIDDLEWARE //
////////////////
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(passport.initialize());
require('./config/passport')(passport);

////////////////////
// MONGOOSE SETUP //
////////////////////
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/reservation';

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

////////////////
// CONTROLLER //
////////////////
const users = require('./routes/api/users');
app.use('/api/users', users)

//////////////////////
// EXPRESS LISTENER //
//////////////////////
app.listen(PORT, () => {
    console.log('Express listening...');
});