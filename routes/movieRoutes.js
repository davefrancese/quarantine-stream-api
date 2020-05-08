const query = require("../db/queries");

module.exports = app => {
  app.get("/allmovies", async (req, res) => {
    const data = await query.getAllMovies();
    res.send(data);
  });

  app.get("/movie/:id", async (req, res) => {
    const data = await query.getMovieById(req.params.id);
    res.send(data[0]);
  });

  app.put("/movie/:id/update", async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    const data = await query.updateMovie(update, id);
    res.send(data);
  });

  app.delete("/movie/:id/delete", async (req, res) => {
    const id = req.params.id;
    const del = await query.deleteMovie(id);
    res.send(del);
  });

  app.post("/postmovie", async (req, res) => {
    // const postMovie = await query.postMovie(req.body.newMovie);
    // const postDirector = await query.postDirector(req.body.newDirector);
    const genreArray = req.body.newGenre.name;
    console.log("genreArray=", genreArray);

    for (let i = 0; i < genreArray.length; i++) {
      try {
        var postGenre = await query.postGenre(genreArray[i]);
      } catch (err) {
        console.log(err);
      }

      console.log("postGenre=", postGenre);
    }
    res.send(postGenre);
  });
};
