const express= require("express")
const  app=express();

const movieRouter=require("./router/moviesRouter")

app.use(express.json())
app.use("/api/v1/movies", movieRouter)

module.exports = app