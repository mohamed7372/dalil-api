// helpers/dateHelper.js
const moment = require("moment");

const formatDate = (date, format = "YYYY-MM-DD HH:mm:ss") => {
  return moment(date).format(format);
};

export default { formatDate };
