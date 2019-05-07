
main();


function main() {

    console.log("Welcome to my app!");

    let answer = calculateAverage(4, 5, 9);
    console.log("The average is: " + answer);

}

function calculateAverage(a, b, c) {

    let total = a + b + c;
    let average = total / 3;

    return average;
    
}

