const express = require('express');
const app = express();
const path = require('path')
require("dotenv").config();
const urlRoute = require('./routes/router');
const staticRoute = require('./routes/staticRouter');
const handelUserSignup = require("./routes/user")
const connectToMongoDb = require('./routes/dbconnect');
const {restrictToLoggedInUserOnly} = require("./middleware/auth")
const PORT = 8001;
const cookieParser = require("cookie-parser")

connectToMongoDb(process.env.DBURL)



app.set("view engine" ,"ejs");
app.set( "views" , path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());


app.use('/',staticRoute);
app.use('/url',restrictToLoggedInUserOnly,urlRoute);
app.use('/user' , handelUserSignup)



app.listen(PORT,()=>{
    console.log('server in running');
})



