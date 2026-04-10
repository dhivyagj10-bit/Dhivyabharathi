import { test,expect} from '@playwright/test'
import path from "path"

test ( 'Placing an order for Apple iPhone 13 Pro from ServiceNow Service Catalog' , async({page , context})=>{

// 1. Launch the ServiceNow application using the given URL.
await page.goto('https://dev280319.service-now.com/session_timeout.do');
await page.waitForTimeout(2000);
// 2. Enter User name as admin.
await page.locator('//label[text()="User name"]').fill('admin');
// 3. Enter Password with valid credentials.
await page.locator('//label[text()="Password"]').fill('YApVc0-vyN5-');
// 4. Click on the Log in button.
//await page.getByRole('button',{ name:"Log in",exact:true}).click();
await page.locator('//button[@type="submit"]').click();
// 5. Wait for the ServiceNow home page to load successfully.
await page.waitForTimeout(2000);
// 6. Click on the All menu from the left navigation panel.
page.getByRole('menuitem',{ name: "All"}).click();
// 7. Click on Service Catalog from the menu options.
await page.getByText("Service Catalog").click();
// 8. Switch to the Service Catalog iframe.
await page.waitForTimeout(1000);
const serviceCatalogframe = page.frameLocator("iframe");
// 9. Click on the Mobiles category.
await serviceCatalogframe.getByAltText("Mobiles").click();
// 10. Select Apple iPhone 13 Pro from the product list.
//const productIphone = page.frameLocator('//iframe[@src="](https:/dev280319.service-now.com/)?"]');
await serviceCatalogframe.locator('//strong[text()="Apple iPhone 13 pro"]').click();
await page.waitForLoadState()
// 11. Choose Yes for the Lost or Broken iPhone option.
//const iphoneOption = page.frameLocator('//iframe[@src="](https:/dev280319.service-now.com/)?"]').locator('//label[text()="Yes"]');
await serviceCatalogframe.locator('//label[text()="Yes"]').click();
// 12. Enter 99 in the Original phone number field.
await serviceCatalogframe.locator('//input[@class="cat_item_option sc-content-pad form-control"]').fill('99');
// 13. Select Unlimited from the Monthly data allowance dropdown.
await serviceCatalogframe.locator('//select[@class="form-control cat_item_option "]').selectOption({ value: "unlimited"});
// 14. Select Sierra Blue as the color option.
await serviceCatalogframe.locator('//label[text()="Sierra Blue"]').click();
// 15. Select 512 GB as the storage option.
await serviceCatalogframe.getByText('512 GB [add $300.00]').click();
// 16. Click on the Order Now button.
await serviceCatalogframe.locator('//button[text()="Order Now"]').click();
// 17. Verify the confirmation message is displayed.
const confirmationMsg= await serviceCatalogframe.locator('//span[text()="Thank you, your request has been submitted"]').innerText();
console.log(confirmationMsg);
// 18. Capture a full-page screenshot of the order confirmation page
 page.screenshot({ path:"data/iphoneorder.png", fullPage: true});

}
)