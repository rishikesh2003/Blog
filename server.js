const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("The server is running properly")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} in ${process.env.NODE_ENV} mode`)
})
