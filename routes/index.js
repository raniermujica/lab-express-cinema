const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.models");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));



// Get movies page

router.get("/movies", (req, res, next) => {
  Movies.find()
    .select("image")
    .select("title")
    .then((response) => {
      console.log(response);

      res.render("movies.hbs", {
        movieList: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

// Get details page

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params
 // console.log(movieId)
 
  Movies.findById(movieId)
    .then((response) => {
      console.log(response);
     res.render("movie-details.hbs", {
       details: response,
     });
    })
    .catch((err) => {
      next(err);
    }); 
    
});



module.exports = router;