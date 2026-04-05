import { test, chromium ,expect} from '@playwright/test';

test('launch the browser', async ({page}) => {

    //Create Lead Test Cases
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.waitForTimeout(5000);
    await page.locator('//label[@for="username"]').fill('demosalesmanager')
    await page.locator('//label[@for="password"]').fill('crmsfa')
    await page.locator('//input[@type="submit"]').click()
    await page.getByRole('link',{name:"CRM/SFA",exact:true}).click()
    await page.click('text=Leads');
    await page.click('text=Create Lead');
    await page.locator('#createLeadForm_companyName').fill('TestLeaf');
    await page.locator('#createLeadForm_firstName').fill('Viswa');
    await page.locator('#createLeadForm_lastName').fill('Bhai');
    await page.locator('//input[@type="submit"]').click()
    //await page.click('text=Create Lead');
    await page.locator('//a[text()="Edit"]').click();
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill('BestEver')
    await page.getByRole('button',{name:"Update",exact:true}).click()

})
