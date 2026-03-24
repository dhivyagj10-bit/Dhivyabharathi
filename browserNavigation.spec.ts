import { test, chromium } from '@playwright/test';

test('launch the browser', async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.redbus.in/');
  console.log("Page title is: " + await page.title());
  console.log("Page URL is:"+ await page.url());
  await page.waitForTimeout(5000);
const browser1 = await chromium.launch({ channel: "msedge", headless: false });
  const page1 = await browser1.newPage();
  await page1.goto('https://www.flipkart.com/');
  console.log("Page title is: " + await page1.title());
  console.log("Page URL is:"+ await page1.url());
  await page1.waitForTimeout(5000);
     await browser.close();
       await browser1.close();
});

