//all authentication routes
const passport=require('passport');
const router=require('express').Router();

//auth login
router.get('/login',(req,res)=>{
    res.render('login');
})

//auth logout
router.get('/logout',(req,res)=>{
    //use passport
    //res.send('logout');
    req.logout();
    res.redirect('/');
})

//google auth
router.get('/google',passport.authenticate('google',{
    scope: ['profile','email']
}))

//callback route for redirect
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    //res.send('You are logged in now, you are- '+req.user);
    res.redirect('/profile/');
})

module.exports=router;