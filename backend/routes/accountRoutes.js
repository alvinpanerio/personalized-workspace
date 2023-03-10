const express = require("express");
const {
  login,
  signup,
  forgotPassword,
  passwordReset,
  getPasswordReset,
  getAccountDetails,
} = require("../controllers/accountsController");

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/forgot", forgotPassword);

router.get("/forgot/:resetToken", getPasswordReset);

router.put("/forgot/:resetToken", passwordReset);

router.get("/:id", getAccountDetails);

module.exports = router;
