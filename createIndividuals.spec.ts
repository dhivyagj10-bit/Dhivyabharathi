import { test, chromium } from '@playwright/test';

test('launch the browser', async ({page}) => {

    //Create Lead Test Cases
    await page.goto('https://testleaf.my.salesforce.com/');
    await page.waitForTimeout(5000);
    await page.locator('//label[@for="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//label[@for="password"]').fill('TestLeaf@2025')
    await page.locator('.button.r4.wide.primary').click()
    await page.locator('//button[@title="App Launcher"]').click()
    await page.locator('//button[text()="View All"]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('//span[text()="Yuvraj KM"]').click()
    await page.locator('//div[@title="Edit"]').click()
    await page.locator('(//a[@class="select"])[1]').click()
    await page.locator('//a[@title="Prof."]').click()
    await page.locator('//span[text()="Save"]').click()
    

})