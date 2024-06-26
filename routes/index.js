var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/movies", (req, res) => {
  const API_KEY = process.env.API_KEY;
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  console.log(process.env);
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
      console.log(data);
    });
});

module.exports = router;
