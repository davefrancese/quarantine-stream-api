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

  app.put("/movie/:id", async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    const data = await query.updateMovie(update, id);
    res.send(data);
  });

  app.delete("/movie/:id", async (req, res) => {
    const id = req.params.id;
    const del = await query.deleteMovie(id);
    res.send(del);
  });

  app.post("/postmovie", async (req, res) => {
    const post = await query.postMovie(req.body);
    res.send(post);
  });
};
