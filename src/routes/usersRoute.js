const { Router } = require("express")
const UserController = require("../controllers/UserController")

const router = Router()
router.post("users/register", UserController.register)

module.exports = router
