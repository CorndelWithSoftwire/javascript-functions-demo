
main();


function main() {

    console.log("Welcome to my app!");

    sayHello(sayGoodbye);

}

function sayHello(nextThingToDo) {

    console.log("Hello");

    nextThingToDo();
    
}

function sayGoodbye() {

    console.log("Goodbye");
    
}
