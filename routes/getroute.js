const express = require("express");
const {fetchDressAgeTwo,fetchJeansAgeNine,fetchManPants,fetchManShorts,fetchManshirts,fetchMantshirt,fetchPantsAgeTwo,fetchPantsNineBoys,fetchPantsTwoBoys,fetchShirtsAgeNine,fetchShirtsAgewo,fetchShirtsNineBoys,fetchShirtsTwoBoys,fetchShortsNineBoys,fetchShortsTwoBoys,fetchSweaterAgeNine,fetchWomanDresses,fetchWomanJeans,fetchWomanPants,fetchWomanShirts,fetchWomanTops} = require("../controllers/getclothescontroller");
const router = express.Router();

router.get('/women/dresses',fetchWomanDresses)
router.get('/women/tops',fetchWomanTops)
router.get('/women/shirts',fetchWomanShirts)
router.get('/women/jeans',fetchWomanJeans)
router.get('/women/pants',fetchWomanPants)
router.get('/men/pants',fetchManPants)
router.get('/men/shorts',fetchManShorts)
router.get('/men/shirts',fetchManshirts)
router.get('/men/tshirts',fetchMantshirt)
router.get('/girls_9_14/jeans',fetchJeansAgeNine)
router.get('/girls_9_14/shirts',fetchShirtsAgeNine)
router.get('/girls_9_14/sweaters',fetchSweaterAgeNine)
router.get('/boys_9_14/pants',fetchPantsNineBoys)
router.get('/boys_9_14/shorts',fetchShortsNineBoys)
router.get('/boys_9_14/shirts',fetchShirtsNineBoys)
router.get('/boys_2_8/shirts',fetchShirtsTwoBoys)
router.get('/boys_2_8/pants',fetchPantsTwoBoys)
router.get('/boys_2_8/shorts',fetchShortsTwoBoys)
router.get('/girls_2_8/dresses',fetchDressAgeTwo)
router.get('/girls_2_8/pants',fetchPantsAgeTwo)
router.get('/girls_2_8/shirts',fetchShirtsAgewo)

module.exports= router