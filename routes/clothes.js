const express = require("express");
const clothesController = require("../controllers/clothescontrollers");
const router = express.Router();

router.route("/women").post(clothesController.addclothes);
router.route("/man").post(clothesController.addmanclothes);




module.exports = router;