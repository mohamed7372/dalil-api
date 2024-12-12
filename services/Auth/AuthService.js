import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import helpers from "../../helpers/helpers.js";
import authHelper from "../../helpers/authHelper.js";

const login = async (payload) => {
  try {
    const { password, username } = payload;
    // Vérifiez l'existence de l'utilisateur
    const user = await helpers.checkExist(username);
    if (!user) return { statusCode: 404, message: "Username is wrong" };

    // Vérifiez si le mot de passe correspond
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = await authHelper.verifyPassword(password, user.password);

    if (isMatch) {
      const token = authHelper.generateToken(user);
      const refresh_token = authHelper.generateRefreshToken(user);

      await prisma.user.update({
        where: { id: user.id },
        data: { refresh_token: refresh_token },
      });

      const role = user?.user_ats ? user.user_ats.role : "SUPERADMIN";

      return {
        statusCode: 200,
        message: "User login successfully",
        data: {
          id: user.id,
          username: user.username,
          cmp_id: user.user_ats.cmp_id,
          image: user.image,
          role,
          user_ats: user.user_ats,
        },
        access_token: token,
        refresh_token: refresh_token,
      };
    } else {
      return { statusCode: 404, message: "Password is wrong" };
    }
  } catch (error) {
    return {
      statusCode: 500,
      message: error.message,
    };
  }
};

export default {
  login,
};
