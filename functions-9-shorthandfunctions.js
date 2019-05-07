
main();


function main() {

    console.log("Welcome to my app!");

    sayHello(function() {
        console.log("Hi");
    });

    sayHello(() => {
        console.log("Howdy");
    });

    sayHello(() => console.log("Good day") );

}

function sayHello(nextThingToDo) {

    console.log("Hello");

    nextThingToDo();
    
}

