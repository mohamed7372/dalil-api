// helpers/authHelper.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (user) => {
  const role = user?.user_ats ? user.user_ats.role : "SUPERADMIN";
  return jwt.sign({ id: user.id, role }, process.env.JWT_SECRET, {
    expiresIn: "100d",
  });
};

const generateRefreshToken = (user) => {
  const role = user?.user_ats ? user.user_ats.role : "SUPERADMIN";
  return jwt.sign({ id: user.id, role }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  let result = await bcrypt.hash(password, salt);

  return result;
};

const verifyPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

export default {
  generateToken,
  generateRefreshToken,
  verifyToken,
  hashPassword,
  verifyPassword,
};
