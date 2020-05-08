exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("movie_director", table => {
      table.increments();
      table.integer("movie_id");
      table.integer("director_id");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("movie_director")]);
};
