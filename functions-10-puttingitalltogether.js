
main();


function main() {

    console.log("Welcome to my app!");

    calculateAverageThen(1, 2, 3, function(answer) {
        console.log("The first average is: " + answer);
    });

    calculateAverageThen(4, 5, 6, (answer) => {
        console.log("The 2nd average is: " + answer);
    });

    calculateAverageThen(7, 8, 9, (answer) => console.log("Average #3 is: " + answer) );

}

function calculateAverageThen(a, b, c, nextThingToDo) {

    let total = a + b + c;
    let average = total / 3;

    nextThingToDo(average);
    
}

