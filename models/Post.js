const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Post = new Schema({
    title : String, 
    author : String,
    body : String,
    date : {type : Date, default : Date.now()},
    userId : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    }
})

module.exports = mongoose.model('Post', Post)