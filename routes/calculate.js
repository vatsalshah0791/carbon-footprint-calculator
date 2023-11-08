const express = require('express');

const { calculateFootPrint } = require('../controllers/footprint');

const router = express.Router();

router.route('/footprint').get(calculateFootPrint)

module.exports = router;
