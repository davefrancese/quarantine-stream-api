exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("movie", table => {
      table.increments();
      table.string("title");
      table.string("type"); // series or film
      table.string("network");
      table.string("director");
      table.string("genre");
      table.string("streamNetwork");
      table.string("rating");
      table.text("summary");
      table.string("stars");
      table.string("posterURL");
      table.string("trailerURL");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("movie")]);
};
