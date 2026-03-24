let s = "Helloworld";
let s1 = "  Hello planet earth  ";
let s2 ="javascript";
let s3 = ["hello", "java", "python", "c++"];

let arrayofwords = s1.split("");
console.log("Split into array of words:", arrayofwords);
let gnt =s.length;
console.log("Length of the string:", gnt);  
let trim = s1.trim();
console.log("trimmed:",`${trim}`);
let splitwords = s1.split(" ");
console.log("Split into array of words:", splitwords); /*
let removespace=s1.replace(/\s+/g,'');
if(s1=== "Hello planet earth"){
    removespace=s1.toUpperCase();
    console.log("The string is same as the expected string without spaces:", removespace);
} */ 
s3.sort();
console.log("Sorted array of words:", s3);
let sortstring=s2.split('').sort().join('');
console.log("Sorting the sentence:", sortstring);

    

