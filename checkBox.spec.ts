import{expect, test}from'@playwright/test';
test('Manage multiple checkboxes',async({page})=>{
    
await page.goto('https://leafground.com/checkbox.xhtml')
await page.locator('//span[text()="Basic"]').click()
await page.locator('//label[text()="Javascript"]').click()
await page.locator('(//div[@class="grid formgrid"])[4]').click()
await page.locator('//div[@class="ui-toggleswitch-slider"]').click()
await page.locator('//ul[@class="ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all"]').click()
await page.locator('(//label[text()="Miami"])[2]').click()
await page.locator('(//label[text()="London"])[2]').click()
await page.locator('(//label[text()="Paris"])[2]').click()
await page.locator('(//label[text()="Berlin"])[2]').click()
expect(page.close)




}

)