const axios = require('axios');

// @desc    Calculate Foot Prints
// @route   GET /api/v1/calculate
// @access  Public
const calculateFootPrint = async (req, res, next) => {
  try {
    const token = '7lLXrfmRwlBG71wguZraA'
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

  const data = {
    "type": "vehicle",
    "distance_unit": "mi",
    "distance_value": req.body.distance_value,
    "vehicle_model_id": req.body.vehicle_model_id
  };
  console.log(data)
  const response = await axios.post('https://www.carboninterface.com/api/v1/estimates', data, config)
  res.status(200).json(response.data)
    //res.status(200).json(response.data) //res.status(200).json({success:true, response:response.data})
  } catch (error) {
    next(error)
  }
 
}



module.exports = {
  calculateFootPrint
};
