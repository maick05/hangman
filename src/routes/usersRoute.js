const { Router } = require("express")
const UserController = require("../controllers/UserController")

const router = Router()
router.get("/register", UserController.register)

module.exports = router
