const express = require('express')
const PostRouter = express.Router()
PostRouter.use(express.json())
PostRouter.use(express.urlencoded())
const Post = require('../models/Post')


PostRouter.get('/', (req, res) => {
    Post
    .find()
    .populate('userId')
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})

PostRouter.get('/:id', (req, res) => {
    Post
    .findOne({_id : req.params.id})
    .populate('userId')
    .then(post => res.json(post))
    .catch(err => res.json(err))
})

PostRouter.post('/', (req, res) => {
    Post
    .create(req.body)
    .then(newPost => res.json(newPost))
    .catch(err => res.json(err))
})

PostRouter.put('/:id', (req,res) => {
    Post
    .updateOne({_id : req.params.id}, {$set : req.body})
    .then(updatedPost => res.json(updatedPost))
    .catch(err => res.json)
})

PostRouter.delete('/:id', (req,res) => {
    Post
    .deleteOne({
        _id : req.params.id
    })
    .then(() => res.json('Document deleted'))
    .catch(err => res.json(err))
})



module.exports = PostRouter