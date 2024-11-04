const express = require('express')
const router = express.Router()
const {generateURL , redirectFun} = require('../controllers/controller')

router.get("/" , (req,res)=>{
    res.render("home")
});

router.post("/" , generateURL);

router.get('/:shortId',redirectFun);

module.exports = router;