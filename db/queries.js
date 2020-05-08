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

// director

const postDirector = newDirector => {
  return db("director")
    .insert(newDirector)
    .returning("*");
};

// genre
const postGenre = async newGenre => {
  console.log(newGenre);
  return await db("genre").insert(newGenre);
  // const [name] = await db("genre")
  //   .where("name", newGenre)
  //   .returning("name");
  // if (name === undefined) {
  //   return db("genre")
  //     .insert(newGenre)
  //     .returning("*");
  // } else {
  //   return "Already Exists";
  // }
};

module.exports = {
  updateMovie,
  getAllMovies,
  getMovieById,
  postMovie,
  deleteMovie,
  postDirector,
  postGenre
};
