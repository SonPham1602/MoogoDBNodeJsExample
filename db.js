var MongoClient = require('mongodb').MongoClient
MongoClient.connect(  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",()=>{
    console.log("connected");
})

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var FoodSchame = new Schema({
    name:{
        type:String,
        required:true
    },
    foodDescription:{
        type:String,
        default:""
    },
    create_date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:[{
            type:String,
            enum:['status1','status2']
        }],
        default:['status1']
    }
})

module.exports = mongoose.model('Food',FoodSchame)
