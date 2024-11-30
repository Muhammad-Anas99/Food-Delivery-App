const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const router = express.Router();

const jwtSecret = "MyNameIsAnas";

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 2 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      const { name, email, password, location } = req.body;
      await User.create({
        name,
        email,
        password: secPassword,
        location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log("err: ", error);
      res.json({ success: false });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: "Invalid Email or Password" });
    }
    const pwdComapre = await bcrypt.compare(password, userData.password);
    if (!pwdComapre) {
      return res.status(400).json({ errors: "Invalid Email or Password" });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.log("err: ", error);
    res.status(400).json({ success: false });
  }
});

module.exports = router;
