// helpers/responseHelper.js
const sendSuccess = (res, data, message = "Success") => {
  res.status(200).json({ message, data });
};

const sendError = (res, error, statusCode = 400) => {
  res
    .status(statusCode)
    .json({ message: error.message || "An error occurred", error });
};

export default {
  sendError,
  sendSuccess,
};
