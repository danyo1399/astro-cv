import puppeteer from 'puppeteer'
import data from  './cvData';
import fs from 'fs/promises';
import path from 'path';

const url = `http://localhost:3000/cv`
const outputPath = path.join(__dirname, '../public/cv');
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  
  for(const key of data.map(x => x.id)) {
    const page = await browser.newPage();
    await page.goto(`${url}/${key}/print`, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ format: 'A4', printBackground: true });
    await fs.mkdir(`${outputPath}/${key}`, {recursive: true});
    await fs.writeFile(`${outputPath}/${key}/cv.pdf`, pdf);

    page.close()
  }
  
  await browser.close();
  
};

printPDF();