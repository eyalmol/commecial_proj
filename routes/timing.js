const express = require("express");
const router = express.Router();
const Timing = require("../model/timing");
//setting the 4 crud operations for commercial(get,post,update,delete)
//get
//We would get all thr commercial in our database and would send them all as a response
router.get("", function (req, res, next) {
  Timing.find({})
    .then(function (timing) {
      res.send(timing);
    })
    .catch(next);
});
//post for commercial only if admin
//We create a new commercial in the database and then return the created bot as a response
router.post("/:admin", function (req, res, next) {
  if (req.params.admin != "admin")
    res.send("only admin is allowed to post timings to the database");
  Timing.create(req.body)
    .then(function (timing) {
      res.send(timing);
      res.status(200);
    })
    .catch(next);
});
module.exports = router;
