const mongoose = require("mongoose")
const app= require("./index")
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const port=process.env.port || 3000;


//MongoDB Connection
mongoose.connect(process.env.LOCAL_CON_STR)
.then(conn => {
   // console.log(conn);
    console.log("DB Connection  Successful");
})
.catch(err =>{
    console.log(err);
})

app.listen(port, () =>{
    console.log("Server started");
})