const axios = require('axios');

// @desc    Get all car makes
// @route   GET /api/v1/cars
// @access  Public
const getCarsMake = async (req, res, next) => {
  try {
    const token = '7lLXrfmRwlBG71wguZraA'
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  
    const response = await axios.get('https://www.carboninterface.com/api/v1/vehicle_makes',config);
    res.status(200).json(response.data)
    //res.status(200).json(response.data) //res.status(200).json({success:true, response:response.data})
  } catch (error) {
    next(error)
  }
 
}

// @desc    Get car model from car make
// @route   GET /api/v1/cars
// @access  Public
const getCarsModel = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id)
    const token = '7lLXrfmRwlBG71wguZraA'
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  
    const response = await axios.get(`https://www.carboninterface.com/api/v1/vehicle_makes/${id}/vehicle_models`,config);
    res.status(200).json(response.data)
    //res.status(200).json(response.data) //res.status(200).json({success:true, response:response.data})
  } catch (error) {
    next(error)
  }
 
}


module.exports = {
  getCarsMake,
  getCarsModel
};
