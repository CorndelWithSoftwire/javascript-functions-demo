
main();


function main() {

    console.log("Welcome to my app!");

    sayHelloThen(sayHowdy);
    sayHelloThen(sayGoodbye);

}

function sayHelloThen(nextThingToDo) {

    console.log("Hello");

    nextThingToDo();
    
}

function sayHowdy() {

    console.log("Howdy");
    
}

function sayGoodbye() {

    console.log("Goodbye");
    
}
