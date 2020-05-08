exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("director", table => {
      table.increments();
      table.string("name");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("director")]);
};
