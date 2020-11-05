const router = require("express").Router()
const booksController = require("../../controllers/apiController")

router.route("/getBooks/:search")
    .get(booksController.search); ///??? how should it be called here


module.exports = router