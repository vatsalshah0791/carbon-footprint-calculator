const express = require('express');

const {  getCarsMake,getCarsModel } = require('../controllers/cars');

const router = express.Router();

router.route('/make').get(getCarsMake)
router.route('/model/:id').get(getCarsModel)
module.exports = router;
