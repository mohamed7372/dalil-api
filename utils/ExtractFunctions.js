import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import xlsx from "xlsx";
import path from "path";
import fs from "fs";

const devisExtract = async (url) => {
  try {
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
    let chapter = null;
    let title = null;
    let subTitle = null;
    for (let i = 0; i < data.slice(0, 166).length; i++) {
      if (data[i].length === 1) {
        if (data[i][0].toString().startsWith("CHAPITRE")) {
          title = null;
          subTitle = null;
          chapter = data[i][0];
          res[chapter] = [];
        } else if (/^[A-Z]-/.test(data[i][0])) {
          subTitle = null;
          title = data[i][0];
          res[chapter][title] = [];
        } else if (/^[1-9]+-/.test(data[i][0])) {
          subTitle = data[i][0];
          res[chapter][title][subTitle] = [];
        }
      } else if (data[i].length === 6) {
        if (subTitle)
          res[chapter][title][subTitle].push({
            nbr_article: data[i][0],
            designation: data[i][1].substring(0, 10),
            unite: data[i][2],
            price: data[i][3] ?? 0,
            qunatity: data[i][4] ?? 0,
          });
        else
          res[chapter][title].push({
            nbr_article: data[i][0],
            designation: data[i][1].substring(0, 10),
            unite: data[i][2],
            price: data[i][3] ?? 0,
            qunatity: data[i][4] ?? 0,
          });
      }
    }

    console.log(res);
  } catch (error) {
    console.error("error extract devis", error.message);
  }
};

export default {
  devisExtract,
};
