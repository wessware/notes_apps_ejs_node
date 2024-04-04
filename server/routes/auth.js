const express = require("express");
const router = express.Router();
const passport = require("passport");

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    
    console.log(profile);
  }
));

// Google Login Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

  //Retrieve user data from google
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect: '/dashboard'
})
);

//route if something goes wrong
router.get('/login-failure', (req, res) => {
    res.send('Something went wrong...')
});

//presist user data after successfull authentication
passport.serializeUser(function(user, done) {
    done(null, user);
  });

  //retrieve user data from session
  passport.deserializeUser(function(user, done) {
    user.FindById(id, function(err, user) {
      done(err, user);
    });
  });


module.exports = router;