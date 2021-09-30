const express = require('express')
const UserRouter = express.Router()
UserRouter.use(express.json())
const User = require('../models/User')


UserRouter.get('/', (req, res) => {
    User
    .find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

UserRouter.post('/', (req, res) => {
    User
    .create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => res.json(err))
})

module.exports = UserRouter