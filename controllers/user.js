const User = require('../models/user');
const {v4:uuidv4} = require("uuid")
const {setUser} = require("../service/auth")
function handelUserSignup(req,res){
    const {name,email,password} = req.body;

    User.create({
        name,
        email,
        password
    })
    .then(()=>{
        return res.redirect("/");
    })
}

function handelUserLogin(req,res){
    const {email,password} = req.body;
    User.findOne({email,password})
    .then((data)=>{
        console.log(data)
        if(!data){
            return res.render("login",{
                error:"invalid username or Password"
            });
        }
        else{
            
            const sessionId = uuidv4();
            setUser(sessionId , data)
            res.cookie("uid" , sessionId);  
            return res.redirect("/url")
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports ={ handelUserSignup,handelUserLogin}