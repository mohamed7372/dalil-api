// helpers/fileHelper.js
import multer from "multer";
import path from "path";
import puppeteer from "puppeteer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import xlsx from "xlsx";
import DevisService from "../services/ODS/Chantier/DevisService.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const generatePDF = async (file_name) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const templateHtml = fs.readFileSync(
    path.join(__dirname, `../templates/${file_name}`),
    "utf8"
  );

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(templateHtml, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  const filePath = path.join(__dirname, "uploads", `ods-${12}.pdf`);
  fs.writeFileSync(filePath, pdfBuffer);
  return filePath;
};

const extractDevis = async (url, dataPlus) => {
  // Path to your Excel file
  const filePath = path.resolve(url);

  // Read the Excel file
  const workbook = xlsx.readFile(filePath);

  // Get the first sheet (if you know the sheet name, you can use that)
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Define the range to start from row 8 (A8, B8, etc.)
  const range = xlsx.utils.decode_range(sheet["!ref"]); // Get the full range of the sheet
  range.s.r = 11; // Set the start row to 8 (index is zero-based, so 7 means row 8)

  // Update the sheet range to start from row 8
  sheet["!ref"] = xlsx.utils.encode_range(range);

  // Convert the sheet to JSON starting from row 8
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  // Print the data from row 8 onward
  const res = [];
  let chapter = "";
  let title = "";
  let subTitle = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].length === 1) {
      if (data[i][0].toString().startsWith("CHAPITRE")) {
        title = "";
        subTitle = "";
        chapter = data[i][0];
        // res[chapter] = [];
      } else if (/^[A-Z]-/.test(data[i][0])) {
        subTitle = "";
        title = data[i][0];
        // res[chapter][title] = [];
      } else if (/^[1-9]+-/.test(data[i][0])) {
        subTitle = data[i][0];
        // res[chapter][title][subTitle] = [];
      }
    } else if (data[i].length === 6) {
      // if (subTitle)
      res.push({
        nbr_article: parseInt(data[i][0] ?? 0),
        designation: data[i][1] ?? "",
        unity: data[i][2] ?? "",
        price: parseFloat(data[i][3] ?? 0),
        quantity: parseFloat(data[i][4] ?? 0),
        chapter,
        title: title,
        sub_title: subTitle,
        ...dataPlus,
      });
    }
  }

  // remove previous devis
  await DevisService.deleteDevis(dataPlus.chantier_id);

  // save in database
  const devisRes = await DevisService.bulkDevis(res);

  return devisRes;
};

export default { upload, generatePDF, extractDevis };
