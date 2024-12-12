import jwt from "jsonwebtoken";
import { Prisma, PrismaClient } from "@prisma/client";
import authHelper from "../helpers/authHelper.js";
const prisma = new PrismaClient();

const requireUserAuth = (roleAccess) => async (req, res, next) => {
  // verify auth
  const { authorization } = req.headers;
  if (!authorization)
    return res
      .status(401)
      .json({ statusCode: "401", message: "authorization token required" });

  const token = authorization.split(" ")[1];

  try {
    const { id, role } = authHelper.verifyToken(token);
    req.user = await prisma.user.findUnique({
      where: { id: id },
      include: {
        user_ats: true,
      },
    });

    if (req.user.user_ats.role !== "SUPERADMIN")
      if (!roleAccess.includes(req.user.user_ats.role))
        return res.status(401).json({
          statusCode: "401",
          message: "you are not allowed to access this service",
        });

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ statusCode: "401", message: "request is not authorized" });
  }
};

const requireSuperAdminAuth = async (req, res, next) => {
  // verify auth
  const { authorization } = req.headers;

  if (!authorization)
    return res
      .status(401)
      .json({ statusCode: "401", message: "authorization token required" });

  const token = authorization.split(" ")[1];
  try {
    const { id, role } = authHelper.verifyToken(token);

    req.user = await prisma.user.findUnique({ where: { id: id } });
    if (role !== "SUPERADMIN") {
      return res.status(401).json({
        statusCode: "401",
        message: "you are not allowed to access this service",
      });
    }

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ statusCode: "401", message: "request is not authorized" });
  }
};

export default { requireUserAuth, requireSuperAdminAuth };
