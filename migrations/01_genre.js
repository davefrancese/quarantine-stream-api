exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("genre", table => {
      table.increments();
      table.string("name");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("genre")]);
};
