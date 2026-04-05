"use strict";
function factor(num) {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
// Example usage with error handling
try {
    const input = -2; // Change this value to test
    console.log(`Factorial of ${input} is: ${factor(input)}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
