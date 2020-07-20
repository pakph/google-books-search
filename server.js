const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_qm7c1t8d:1234qwer@ds239936.mlab.com:39936/heroku_qm7c1t8c"
);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
