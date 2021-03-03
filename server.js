const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000


// Assets
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

//Routes
require('./routes/web')(app)

//Create Server
const server = app.listen(PORT,() => {
	console.log(`Listening on port : ${PORT}`)
})
