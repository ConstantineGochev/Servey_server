const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token == %s',accessToken);
    console.log('refresh token == %s',refreshToken);
    console.log('profle == %s',profile);
    User.findOne({
        googleId: profile.id
    }).then((existingUser) => {
        if(existingUser){
            done(null, existingUser)
            console.log('tehe is already user')
        }else{
            new User({
                googleId: profile.id
            })
            .save()
            .then((user) => {
                done(null, user)
            })
        }
    })
    
}));