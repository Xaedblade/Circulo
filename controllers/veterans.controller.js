const VeteranService = require("../services/veterans.service");

exports.getVeteranStatus = async (req, res, next) => {
  // deconstruct the request body
  const { ssn, first_name, last_name, birth_date, gender, middle_name } =
    req.body;

  // check that required fields have been endered
  if (!ssn || !first_name || !last_name || !birth_date) {
    console.log(req.body);
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  try {
    // get the status from the veteransService
    const veteranStatus = await VeteranService.getVeteranStatus(req.body);

    return res.status(200).json({ success: true, data: veteranStatus });
  } catch (errs) {
    console.log(errs.response.data);
    return res.status(500).json({ success: false, message: errs });
  }
};
