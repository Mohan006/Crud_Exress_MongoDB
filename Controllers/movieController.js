const Movie=require("../Model/movieModel")

//Get All Movies
exports. getAllMovies=async (req,res)=>{
   try{
    const movie=await Movie.find();
    res.status(200).json({
        status:"success",
        data:{
            movie
        }
    })
   }
   catch (err){
    res.status(404).json({
        status:"Fail",
        error:err.message
    })git 

   }
}

//Get Movie only by ID

exports. getMovie=async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id);
        res.status(200).json({
            status:"success",
            data:{
                movie
            }
        })
       }
       catch (err){
        res.status(404).json({
            status:"Fail",
            error:err.message
        })
       }
}

// Create New Movie
exports. createMovie=async (req,res)=>{
    try{
        const movie= await Movie.create(req.body)
        res.status(201).json({
            status:"success",
            data:{
                movie
            }
        })

    }
    catch(error){
        res.status(404).json({
            status:"Fail",
            error:error.message
        })
    }
}



// Update Movie By ID
exports. updateMovie= async(req,res)=>{
    try {
        const updatedMovie=await Movie.findByIdAndUpdate(req.params.id, req.body, {new:true ,runValidators:true })
        res.status(201).json({
            status:"success",
            data:{
                updatedMovie
            }
        })
    }
    catch(error){
        res.status(404).json({
            status:"Fail",
            error:error.message
        })
    }
   
}


// Delete Movie By ID
exports. deleteMovie=async (req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status:"success",
            data:null
        })

    }
    catch(error){
        res.status(404).json({
            status:"Fail",
            error:error.message
        })
    }
}