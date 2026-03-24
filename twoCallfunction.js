function launchBrowser() {
let launchBrowser = "Google chrome";

if (launchBrowser === "msedge") {
    console.log("Launching msedge");
}
else {
    console.log("Not able to launch the browser");
}
}
function runTest(testType) {
    switch (testType) {
        case "smoke": 
          console.log("smoke");
           break
       
        case "sanity":
            console.log("sanity");
             break
        case "regression":
            console.log("regression");
             break

        default:
            console.log("smoke");
    }   
    
}
runTest();
launchBrowser();

