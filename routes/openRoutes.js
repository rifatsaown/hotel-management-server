const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Hotel Server is Running!') ) // Default Route

module.exports = router;