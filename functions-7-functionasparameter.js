
main();


function main() {

    console.log("Welcome to my app!");

    sayHelloThen(function() {
        console.log("Howdy");
    });

    sayHelloThen(function() {
        console.log("Goodbye");
    });

}

function sayHelloThen(nextThingToDo) {

    console.log("Hello");

    nextThingToDo();
    
}

