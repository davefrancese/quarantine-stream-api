exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("genre")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("genre").insert([
        { id: 100, name: "Drama" },
        { id: 200, name: "Comedy" }
      ]);
    });
};
