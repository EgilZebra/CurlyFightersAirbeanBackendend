const express = require("express");
const userSignup = require('../controllers/userController.js')
const router = express.Router()

router.post("/user/signup", userSignup.post);
router.get("/user/login", userSignup.get);

module.exports = router;
