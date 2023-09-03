const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const cookie_session = require('cookie-session');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongodb_uri);
app = express()

app.use(
    cookie_session({
        maxAge : 30 * 24 * 60 * 60 * 1000,
        keys : [keys.cookie_key]
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routs/auth_routes')(app);


const PORT = process.env.PORT || 5100;
app.listen(PORT);

