const express = require('express')
const router = express.Router()
const openController = require('../controllers/openController')

router.get('/', (req, res) => res.send('Hotel Server is Running!')) // Default Route
router.get("/hotelInfo", openController.getHotelInfo) // Get Hotel basic Info
router.get("/heroDetails", openController.getHeroDetails) // Get Hero section Details

module.exports = router;