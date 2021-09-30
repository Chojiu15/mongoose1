const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3003
require('dotenv').config()
const PostRouter = require('./routes/PostRouter')
const UserRouter = require('./routes/UserRouter')

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Welcome to my mongoDB API')
} )

app.use('/api/posts', PostRouter)
app.use('/api/users', UserRouter)


mongoose.connect(process.env.MONGO_DB, {useNewUrlParser : true})

db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connexion error'))


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

