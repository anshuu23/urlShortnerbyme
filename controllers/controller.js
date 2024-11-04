const shortid = require('shortid');
const URL = require('../models/url');


function generateURL(req,res){
   if(!req.body.url){
    res.status(400).send({msg:'pls send url'});
   }
   const shortId = shortid();
   
   URL.create({
    shortId:shortId,
    redirectURL:req.body.url
   })
   .then(()=>{
   return res.render('home',{
    id:shortId
   })
   })
   .catch(()=>{
    res.status(500).send({msg:"err in db"})
   })
}

function redirectFun(req,res){
    if(!req.params.shortId){
        res.status(400).send('<h1>pls send short id </h1>')
    }
    URL.findOne({
        shortId:req.params.shortId
    })
    .then((data)=>{
        
        res.redirect(data.redirectURL)
    })
    .catch(()=>{
        res.status(400).send('<h1> this url is not register</h1>');
    })
}
module.exports ={generateURL , redirectFun};