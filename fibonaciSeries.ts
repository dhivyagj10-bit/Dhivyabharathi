// Function to generate Fibonacci series
function fibonacci(n: number): number[] {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error("Number must be a positive integer.");
    }

    const series: number[] = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            series.push(0);
        } else if (i === 1) {
            series.push(1);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }

    return series;
}


try {
    const terms = 10; 
    const fibonacciSeries = fibonacci(terms);
    console.log(`Fibonacci series with ${terms} terms:`, fibonacciSeries);
} catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}