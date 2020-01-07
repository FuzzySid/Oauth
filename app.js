const express= require('express');
const authRoutes=require('./routes/auth-routes');
const profileRoutes=require('./routes/profile-routes');
const passportSetup=require('./config/passport-setup');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookieSession = require('cookie-session');
const passport=require('passport');

//connect to db
mongoose.connect(keys.mLab.dbURI,()=>{
    console.log('connected to db');
});

const app=express();

//set up view engine
app.set('view engine','ejs');

//set up cookies
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: ['afajhfbahfahb']
}))

//initialise passport and use session cookies
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

//base route
app.get('/',(req,res)=>{
    res.render('home');
})


//listen to port
app.listen(3000,()=>{
    console.log('App running on port 3000...');

})


