const express=require("express")
const movieController= require("../Controllers/movieController")
const router=express.Router();

router.param=("id", (req,res,next,value)=>{
    console.log("movie id " + value);
  next();
})
router.route("/")
    .get(movieController.getAllMovies)
    .post(movieController.createMovie)

router.route("/:id")
    .get(movieController.getMovie)
    .put(movieController.updateMovie)
    .delete(movieController.deleteMovie)

module.exports = router