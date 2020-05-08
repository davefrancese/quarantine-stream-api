exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("movie")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie").insert([
        {
          id: 100,
          title: "Ozark",
          type: "Series",
          network: "Netflix",
          streamNetwork: "Netflix",
          rating: "9/10",
          posterURL:
            "https://m.media-amazon.com/images/M/MV5BM2Q3MjQ3NDAtZDk4NS00MDIwLTllZGUtMmY1ZDU2OTJkNGY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
        }
      ]);
    });
};
