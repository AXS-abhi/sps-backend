const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  text: String,
  timestamp: { type: Date, default: Date.now },
  expiration: { type: Date, default: null },
  user: String,
});

mongoose.model("Notification", notificationSchema);
