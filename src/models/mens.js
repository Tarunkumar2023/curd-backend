const express = require("express")
const  mongoose  = require("mongoose")

const menSchema = new mongoose.Schema ({ // Schema Creation 
    Name:{
        type:String,
        required:Boolean,
        trim:Boolean
    },
    dob:{
        type:String,
        // required:Boolean,
        trim:Boolean
    },
    Country:{
        type:String,
        required:Boolean,
        trim:Boolean
    },
    Event:{
        type:String,
        default:"100m"
    }
})
   
//collections 
const MensRanking = new mongoose.model("MenRanking",menSchema)  
module.exports = MensRanking 