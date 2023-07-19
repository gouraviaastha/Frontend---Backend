const mongoose = require('mongoose')
const myshema = mongoose.Schema({
    name : { 
        type : String
    },
    contact : {
        type : String
    },
    img : {
        type : String
    },
    category : {
        type : String
    },
    join:{
        type : Date
    },
    count :{
        type : String
    }
},{timestamps : true})
module.exports = mongoose.model('data', myshema)