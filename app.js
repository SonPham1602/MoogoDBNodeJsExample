var mongoose = require('mongoose')
var express = require('express')
var index = require('./routes/index')
var app = express()
var morgan = require('morgan')
let options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false", options).then(() => {
    console.log("ket noi db thanh cong")
})
app.use(morgan("dev"));
app.use('/', index)
var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is running port", port)
})