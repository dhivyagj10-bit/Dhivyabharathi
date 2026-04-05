import{test}from"@playwright/test";
test("Locators Assignment",async({page})=>{
    //Login to salesforce
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Enter the username and password
    await page.fill("#username","Demosalesmanager");
    await page.fill("#password","crmsfa");
    //Click on the login button
    await page.click(".decorativeSubmit");
    //Click on the CRM/SFA link
    await page.click("text=CRM/SFA");
    //Click on the Leads link
    await page.click("text=Leads");
    //Click on the Create Lead link
    await page.click("text=Create Lead");
    //Enter the company name, first name and last name
    await page.fill("#createLeadForm_companyName","TestLeaf");
    await page.fill("#createLeadForm_firstName","Sunflower");
    await page.fill("#createLeadForm_lastName","Test");
    //Click on the Create Lead button
    await page.click(".smallSubmit");
    //click on the edit button
    await page.click("text=Edit");
    //Change the company name and click on the update button
    await page.fill("#updateLeadForm_companyName","TestLeaf Updated");
    await page.click(".smallSubmit");
});


