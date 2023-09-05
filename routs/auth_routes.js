const passport = require('passport');

//init the route for google oauth
//passing via a export function 
module.exports = (app) => {

    
    app.get('/auth/github',
        passport.authenticate('github', { scope: [ 'user:email' ] }));

    app.get('/auth/github/callback',passport.authenticate('github'));
    app.get('/auth/google' , passport.authenticate('google' , {
        scope : ['profile' , 'email']})
    );


    app.get('/auth/google/callback' , passport.authenticate('google'));

    //for logout the user 
    app.get('/api/logout' , (req , res) => {
        req.logout();
        res.send("you've been log out successfully !! mf" );
    })

    app.get('/api/current_user' , (req , res) => {
        res.send(req.user);
    }); 


};
