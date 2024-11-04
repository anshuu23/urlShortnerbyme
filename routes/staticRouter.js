const express = require('express')
const router = express.Router()

router.get('/' , (req,res)=>{
    res.render('signup')
})



router.get('/login' , (req,res)=>{
    
    console.log("login req came")
    res.render('login')
})


module.exports = router;