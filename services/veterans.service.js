const { default: axios } = require("axios");

// Gets the veteran status using the api
const getVeteranStatus = async (veteranDetails) => {
  // set headers
  axios.defaults.headers.apikey = process.env.API_KEY;

  // get veteran status of person's details
  const response = await axios.post(process.env.VT_STATUS_URI, veteranDetails);

  return response.data;
};

module.exports = {
  getVeteranStatus,
};
