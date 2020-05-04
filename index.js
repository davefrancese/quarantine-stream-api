const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// ROUTES
require("./routes/movieRoutes")(app);
require("./routes/imdbRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
