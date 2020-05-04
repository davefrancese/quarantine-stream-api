const fetch = require("node-fetch");
const cheerio = require("cheerio");
const searchUrl = "https://www.imdb.com/find?s=tt&ref_=nv_sr_sm&q=";
const movieUrl = "https://www.imdb.com/title/";

const searchMovies = async searchTerm => {
  const data = await fetch(`${searchUrl}${searchTerm}`);
  const body = await data.text();
  const movies = [];
  const $ = cheerio.load(body);
  $(".findResult").each((i, element) => {
    const $element = $(element);
    const $image = $element.find("td a img");
    const $title = $element.find("td.result_text a");
    const imdbID = $title.attr("href").match(/title\/(.*)\//)[1];
    const movie = {
      image: $image.attr("src"),
      title: $title.text(),
      imdbID
    };
    movies.push(movie);
  });
  return movies;
};

const getMovie = async imdbID => {
  const data = await fetch(`${movieUrl}${imdbID}`);
  const body = await data.text();
  const $ = cheerio.load(body);
  const $title = $(".title_wrapper h1")
    .clone()
    .children()
    .remove()
    .end()
    .text()
    .trim();

  const $type = $(".subtext a:nth-child(6)")
    .text()
    .trim();

  return {
    title: $title,
    type: $type
  };
};

module.exports = {
  searchMovies,
  getMovie
};
