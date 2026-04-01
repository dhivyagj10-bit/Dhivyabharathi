import{test}from'@playwright/test';
test('Create Lead',async({page})=>{
//Launch the URL
await page.goto('http://leaftaps.com/opentaps/control/main');
//Enter the username
await page.fill('#username','Demosalesmanager');
//Enter the password
await page.fill('#password','crmsfa');
//Click on Login Button (decirative submit is a class name so we are using . to identify the class name)
await page.click('.decorativeSubmit');
//Click on CRM/SFA Link
await page.click('text=CRM/SFA');
//Click on Leads Button
await page.click('text=Leads');
//Click on Create Lead Button
await page.click('text=Create Lead');
//Fill the Company Name (using # to identify the id)
await page.locator('#createLeadForm_companyName').fill('TestLeaf');
//Fill the First Name
await page.locator('#createLeadForm_firstName').fill('Dhivya');
//Fill the Last Name
await page.locator('#createLeadForm_lastName').fill('GJ');
//Fill the Salutation
await page.locator('#createLeadForm_personalTitle').fill('Hi');
//Fill the Title
await page.locator('#createLeadForm_generalProfTitle').fill('Test Engineer');
//Fill the Annual Revenue   
await page.locator('[name="annualRevenue"]').fill('1000000');
//Fill the Department
await page.locator('#createLeadForm_departmentName').fill('Testing');
//Fill the Phone Number
await page.locator('#createLeadForm_primaryPhoneNumber').fill('8870962670');
//Click on Create Lead Button
await page.click('text=Create Lead');
}

)