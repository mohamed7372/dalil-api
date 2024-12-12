import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import XLSX from "xlsx";
// import path from "path";

// Helper function to generate a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// Helper function to check user if existing
const checkExist = async (username) => {
  let existingUser;
  if (username)
    existingUser = await prisma.user.findUnique({
      where: { username: username },
      include: {
        user_ats: true,
      },
    });

  return existingUser;
};

// Helper function to check excel file
const validateExcel = async (fileName, requiredCols) => {
  const workbook = XLSX.readFile(`./uploads/${fileName}`);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  let headerRow = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
  headerRow = headerRow.map((item) => item.toLowerCase());

  // Check if all required columns exist in the header row
  const missingCols = requiredCols.filter(
    (col) => !headerRow.includes(col.toLowerCase())
  );

  if (missingCols.length > 0) {
    return {
      statusCode: 404,
      message: `Missing columns: ${missingCols.join(", ")}`,
    };
  }

  // Validation passed
  return {
    statusCode: 200,
    message: "Excel file is valid.",
  };
};

export default {
  createToken,
  checkExist,
  validateExcel,
};
