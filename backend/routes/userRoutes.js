const express = require("express")
const router = express.Router()
const { loginUser } = require("../controllers/userController")
const protect = require("../middleware/authMiddleware")

router.get("/", protect, loginUser)

module.exports = router