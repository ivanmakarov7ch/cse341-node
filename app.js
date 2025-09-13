const express = require("express");
const bodyParset = require("body-parser");
const app = express();
const path = require("path");
const routes = require("./routes"); // <-- note: routes folder
const mongodb = require("./db/database");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));
app.use(bodyParset.json()); // from teacher video

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  app.use("/", routes); // Use main routes

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); //for server
  });
});
