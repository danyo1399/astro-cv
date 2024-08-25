import puppeteer from 'puppeteer';
import data from './cvData';
import fs from 'fs/promises';
import path from 'path';

const url = `http://localhost:3000/cv`;
const outputPath = path.join(__dirname, '../public/cv');
async function printPDF() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });

  for (const key of data.map((x) => x.id)) {
    const page = await browser.newPage();
    const targetUrl = `${url}/${key}/print`;
    console.log('navigate to', targetUrl);
    await page.goto(targetUrl, { waitUntil: 'networkidle0' });
    console.log('printing');
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, bottom: 0, right: 0, left: 0 }
    });
    page.close();
    console.log('document printed');
    const docPath = `${outputPath}/${key}/cv.pdf`;
    await fs.mkdir(`${outputPath}/${key}`, { recursive: true });
    await fs.writeFile(docPath, pdf);
    console.log('document printed to ', docPath);
  }
  console.log('Closing browser');
  try {
    await browser.close();
  } catch (error) {
    console.log('Error closing browser. dont care');
  }
}

printPDF();
