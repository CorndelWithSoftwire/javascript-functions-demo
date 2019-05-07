
main();


function main() {

    console.log("Welcome to my app!");

    sayHello("James", 5);

}

function sayHello(name, numberOfTimesToSayHello) {

    for (let i = 0; i < numberOfTimesToSayHello; i++) {

        console.log("Hello " + name);
        
    }
    
}

