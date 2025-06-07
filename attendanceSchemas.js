const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userId: String,
  day: String,
  date: String,
  time: String,
});

mongoose.model("Attendance", AttendanceSchema);
