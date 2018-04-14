const express = require('express')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

//cliendID === 645080786682-t5rfj2meokvvfuqhkpic8htk5qljv0b9.apps.googleusercontent.com
//  cliendSecret === Wpbetugbi8Prwc7AWLrUYj-g

const app = express();


passport.use(GoogleStrategy());


const port = process.env.PORT || 3000
app.listen(port);
















