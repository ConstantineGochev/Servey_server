const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token == %s',accessToken);
    console.log('refresh token == %s',refreshToken);
    console.log('profle == %s',profile);
    
}));