const express = require("express");
const clothesController = require("../controllers/clothescontrollers");
const router = express.Router();

router.route("/women").post(clothesController.addclothes);
router.route("/man").post(clothesController.addmanclothes);
router.route("/kids").post(clothesController.addkidsclothes);
router.route("/maneagle").post(clothesController.addmanclotheseagle);
router.route("/womeneagle").post(clothesController.addclotheswomeneagle);




module.exports = router;