const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        uniquie:true,
    },
    redirectURL:{
        type:String,
        required:true,
    }
})

const URL = mongoose.model('url',urlSchema);

module.exports = URL