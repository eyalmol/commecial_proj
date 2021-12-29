const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create commercial schema and model
const timingSchema = new Schema({
  startTime: {
    type: Number,
    required: [true, "start time is required"],
  },
  endTime: {
    type: Number,
    required: [true, "end time is required"],
  },
  commercialNumber: {
    type: Number,
    required: [true, "the commercial number is required"],
  },
});

const Timing = mongoose.model("timing", timingSchema);
module.exports = Timing;
