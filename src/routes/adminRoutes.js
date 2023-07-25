const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.use(verifyAdmin);

router.get('/', (req, res) => res.send('Admin Route is Running!'));
router.post('/additem',  adminController.addRoom);



module.exports = router;