const express = require('express')
const router = express.Router()
const {handelUserSignup , handelUserLogin}= require("../controllers/user")


router.post('/signup',handelUserSignup)
router.post('/login',handelUserLogin)

module.exports = router;