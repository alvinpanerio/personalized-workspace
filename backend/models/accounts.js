const mongoose = require("mongoose");

const profileDetailsSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profileAvatar: {
    type: String,
    required: true,
  },
});

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileDetails: [profileDetailsSchema],
  resetToken: String,
  resetExpiresOn: String,
});

module.exports = mongoose.model("Account", accountSchema);
