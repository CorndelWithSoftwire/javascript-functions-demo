
main();


function main() {

    console.log("Welcome to my app!");

    calculateAverageThen(4, 5, 9, function(answer) {
        console.log("The average is: " + answer);
    });

}

function calculateAverageThen(a, b, c, nextThingToDo) {

    let total = a + b + c;
    let average = total / 3;

    nextThingToDo(average);
    
}

