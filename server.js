const express = require('express');
const app = express();
const path = require('path')

const urlRoute = require('./routes/router');
const staticRoute = require('./routes/staticRouter');
const handelUserSignup = require("./routes/user")
const connectToMongoDb = require('./routes/dbconnect');
const {restrictToLoggedInUserOnly} = require("./middleware/auth")
const PORT = 8001;
const cookieParser = require("cookie-parser")

connectToMongoDb('mongodb://127.0.0.1:27017/urlShortnerByMe')



app.set("view engine" ,"ejs");
app.set( "views" , path.resolve("./views"))
console.log(1)
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
console.log(2)

app.use('/',staticRoute);
app.use('/url',restrictToLoggedInUserOnly,urlRoute);
app.use('/user' , handelUserSignup)



app.listen(PORT,()=>{
    console.log('server in running');
})



