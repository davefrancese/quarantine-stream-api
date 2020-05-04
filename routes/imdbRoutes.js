const cheerio = require("cheerio");
const fetch = require("node-fetch");
const scraper = require("../scraper/imdb");

module.exports = app => {
  app.get("/imdb/:title", async (req, res) => {
    const movies = await scraper.searchMovies(req.params.title);
    res.json(movies);
  });

  app.get("/imdbmovie/:imdbID", async (req, res) => {
    const movie = await scraper.getMovie(req.params.imdbID);
    res.json(movie);
  });
};
