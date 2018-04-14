const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('cookie-session')
const keys = require('./config/keys');


require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookie]
}));
app.use(passport.initialize());
app.use(passport.session())

require('./routes/authRoutes')(app)


const port = process.env.PORT || 3000
app.listen(port);
















