import{expect, test}from'@playwright/test';
test('Auto-Wait',async({page})=>{
await page.goto('https://leafground.com/waits.xhtml')
await page.locator('(//span[@class="ui-button-text ui-c"])[1]').click()
const herebox = page.locator('//span[text()="I am here"]')
await expect(herebox).toBeVisible({timeout:10000})
await page.locator('(//span[@class="ui-button-text ui-c"])[3]').click()
const hidebox = page.locator('//span[text()="I am about to hide"]')
await expect(hidebox).toBeHidden({timeout:10000})
await page.locator('//span[text()="Click First Button"]').click()
await page.locator('(//span[@class="ui-button-text ui-c"])[6]').click()
const noticebox = page.locator('//span[text()="Did you notice?"]')
await expect(noticebox).toBeVisible({timeout:10000})

})
