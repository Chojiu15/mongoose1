const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
    first_name : String, 
    last_name : String,
    date : {type : Date, default : Date.now()}
})

module.exports = mongoose.model('User', User)