const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//set up our express app
const app = express();
//connect to mongoDB
mongoose.connect("mongodb://localhost:27017");
mongoose.Promise = global.Promise;
//add support to serve static files
app.use(express.static("public"));
//parse the data to json file
app.use(express.json());
//use cors so that we can run the server and the client side from two diffrent locations
app.use(cors());
//set the app to use the bot1,bot2,bot3 files(will hold our operations)
app.use("/commercial", require("./routes/commercial"));
app.use("/commercial/timing", require("./routes/timing"));
//handle the errors that occurred during the operations
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
//listen for request
app.listen(process.env.port || 8080, function () {
  console.log("Ready to Go!");
});
