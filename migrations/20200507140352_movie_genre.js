exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("movie_genre", table => {
      table.increments();
      table.integer("movie_id");
      table.integer("genre_id");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("movie_genre")]);
};
