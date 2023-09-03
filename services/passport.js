const passport = require('passport');
const google_stratergy  = require('passport-google-oauth20').Strategy; 
const keys = require('../config/keys.js');
const mongoose = require('mongoose');

const User = mongoose.model('User');
//defining the serialize user
passport.serializeUser((user , done) =>{
    done(null , user);
});

//deserializing the user 
passport.deserializeUser((id , done) => {
    User.findById(id).then(user => {done(null , user);});
});

passport.use(new google_stratergy({
    clientID:keys.google_client_id,
    clientSecret : keys.google_client_secret,
    callbackURL : '/auth/google/callback'
},
(accessToken , refreshToken , profile , done) => {
    User.findOne({
        googleId : profile.id
    })
    .then(exisiting_user => {
        if(exisiting_user){
            
            done(null , exisiting_user);
        }
        else{
            new User({googleId : profile.id})
            .save()
            .then(user => {done(null , user)});
        
        }
        
    })

    

    
})
);
