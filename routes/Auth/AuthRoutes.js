import express from "express";
import { login, me } from "../../controllers/Auth/AuthController.js";
import authValidator from "../../validator/authValidator.js";
import requireAuth from "../../middelwares/requireAuth.js";

const authRouter = express.Router();

authRouter.post("/api/auth/login", authValidator.loginValidator, login);
authRouter.post(
  "/api/me",
  requireAuth.requireUserAuth([
    "SUPERADMIN",
    "DRA",
    "DCMP",
    "CRU",
    "SURVEILLANT",
    "CMRA",
    "SDT",
    "CIL",
  ]),
  me
);

export default authRouter;
