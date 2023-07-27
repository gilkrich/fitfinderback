const express = require("express");
const clothesController = require("../controllers/clothescontrollers");
const router = express.Router();

router.route("/").post(clothesController.addclothes);




module.exports = router;