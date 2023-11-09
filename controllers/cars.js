const axios = require('axios');

// @desc    Get all car makes
// @route   GET /api/v1/cars
// @access  Public
const getCarsMake = async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${process.env.TOKEN}` }
  };
  
    const response = await axios.get(`${APIURL}/vehicle_makes`,config);
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
    const config = {
      headers: { Authorization: `Bearer ${process.env.TOKEN}` }
  };
  
    const response = await axios.get(`${APIURL}/vehicle_makes/${req.params.id}/vehicle_models`,config);
    const finalArr = []
    let firstObj = []
    response.data.find(function (element, indx, theArr){
      const found = firstObj.some(el => el.name === element.data.attributes.name && el.year === element.data.attributes.year);
      if (!found)  finalArr.push(element)
      firstObj.push({name: element.data.attributes.name, year:element.data.attributes.year });
    })
    res.status(200).json(finalArr)
  } catch (error) {
    next(error)
  }
 
}


module.exports = {
  getCarsMake,
  getCarsModel
};
