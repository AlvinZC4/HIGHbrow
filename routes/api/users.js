const router = require("express").Router()
const usersController = require("../../controllers/usersController")


router.route("/username")
    .post(usersController.findUsername)

router.route("/mywishlist")
    .post(usersController.findAllUserBooks)
    
router.route("/createuser")
    .post(usersController.createUser)

router.route("/findreader")
    .post(usersController.findReader)

router.route("/:username")
    .put(usersController.addBook)

module.exports = router