exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("movie")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie").insert([
        {
          id: 1,
          title: "Ozark",
          type: "Series",
          director_creator: "Bill Dubuque, Mark Williams",
          network: "Netflix",
          streamNetwork: "Netflix",
          rating: "9/10",
          posterURL:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F98%2F43%2F45%2F984345168a6a67fe8a5e0cacbe1fb7dc.jpg&f=1&nofb=1"
        }
      ]);
    });
};
