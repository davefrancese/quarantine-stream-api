const db = require("./connection");

// All query functions here.
const getAllMovies = () => {
  return db("movie").select();
};

const getMovieById = id => {
  return db("movie").where("id", id);
};

const postMovie = newMovie => {
  return db("movie")
    .insert(newMovie)
    .returning(["id", "title"]);
};

const updateMovie = (update, id) => {
  return db("movie")
    .where("id", id)
    .update(update)
    .returning("*");
};

const deleteMovie = id => {
  return db("movie")
    .where("id", id)
    .del()
    .returning("*");
};

module.exports = {
  updateMovie,
  getAllMovies,
  getMovieById,
  postMovie,
  deleteMovie
};
