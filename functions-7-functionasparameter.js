
main();


function main() {

    console.log("Welcome to my app!");

    sayHello(function() {
        console.log("Goodbye");
    });

}

function sayHello(nextThingToDo) {

    console.log("Hello");

    nextThingToDo();
    
}

