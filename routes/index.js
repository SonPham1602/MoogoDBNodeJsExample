var express  = require('express')
var router = express.Router()
var FoodModel = require('../db')

router.get("/add-new-food",function(req,res){
    const newFood = new FoodModel({
        name:"test",
        foodDescription:"testDescription"
    })
    newFood.save((err)=>{
        if(err){
            console.log("Loi")
            res.json("that bai")
        }
        else
        {
            console.log("Thanh cong");
            res.json("thanh cong")
                    
        }
    })
})
module.exports = router