const passport = require('passport');
const google_stratergy  = require('passport-google-oauth20').Strategy; 
const keys = require('../config/keys.js');
const mongoose = require('mongoose');
const github_stratergy =  require('passport-github2').Strategy;

const User = mongoose.model('User');
const gitUser = mongoose.model('gituser');
//defining the serialize user
passport.serializeUser((user , done) =>{
    done(null , user);
});

//deserializing the user 
passport.deserializeUser((id , done) => {
    User.findById(id).then(user => {done(null , user);});
});
//for google
passport.use(new google_stratergy({
    clientID:keys.google_client_id,
    clientSecret : keys.google_client_secret,
    callbackURL : '/auth/google/callback',
    proxy:true
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

    

    
}));

//for github
passport.use(new github_stratergy({
    clientID:keys.github_client_id,
    clientSecret:keys.github_client_secret,
    callbackURL:'/auth/github/callback',
    proxy:true
} , 
(accessToken , refreshToken , profile , done) => {
    gitUser.findOne({
        githubId : profile.id
    })
    .then(exisiting_user => {
        if(exisiting_user){
            
            done(null , exisiting_user);
        }
        else{
            new gitUser({githubId : profile.id})
            .save()
            .then(user => {done(null , user)});
        
        }
        
    })

    

    
}));
