const mongoose = require("mongoose")
const  movieSchema= mongoose.Schema({
    movieName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },  
     relewseDate:{
        type:Number,
        required:true
    } ,
      rating:{
        type:Number,
        default:1.5
    }
})

//model 

const Movie=mongoose.model("movies",movieSchema)

module.exports=Movie