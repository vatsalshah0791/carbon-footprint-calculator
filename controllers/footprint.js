const axios = require('axios');

// @desc    Calculate Foot Prints
// @route   GET /api/v1/calculate
// @access  Public
const calculateFootPrint = async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${process.env.TOKEN}` }
  };

  const data = {
    "type": "vehicle",
    "distance_unit": "mi",
    "distance_value": req.body.distance_value,
    "vehicle_model_id": req.body.vehicle_model_id
  };

  const response = await axios.post(`${APIURL}/estimates`, data, config)
  res.status(200).json(response.data)
  
} catch (error) {
    next(error)
  }
 
}



module.exports = {
  calculateFootPrint
};
