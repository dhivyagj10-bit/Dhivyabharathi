var genderType = "female";
function printGender() {
   let functionscope ="Brown";
    if (genderType==="female") {
     console.log("print the color"+ functionscope);   
    }
   
    else if (genderType!=="female" ) {
        var age = 30;
        let blockscope = "pink";
        console.log("print the color"+ blockscope);
    }  
    }

printGender();