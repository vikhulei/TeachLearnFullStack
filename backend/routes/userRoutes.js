const express = require("express")
const router = express.Router()
const { loginUser } = require("../controllers/userController")

router.get("/", loginUser)

module.exports = router