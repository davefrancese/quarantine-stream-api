require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "my-movies"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
