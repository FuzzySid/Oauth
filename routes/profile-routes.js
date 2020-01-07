const router=require('express').Router();

//check if user is trying to redirect to the profile route without logging in
const authCheck=(req,res,next)=>{
    if(!req.user){
        //user is not logged in
        res.redirect('/auth/login');
    }else{
        //user is logged in
        next(); //go on to the next function
    }
}

router.get('/',authCheck,(req,res)=>{
    // res.send('You are logged in, this is your profile-'+req.user.username);
    res.render('profile',{
        user: req.user
    });
})

module.exports=router;