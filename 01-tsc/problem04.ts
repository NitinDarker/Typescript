// Create a function that takes another function as input, and runs it after 1 second.

function funcRunner(argFunction: () => void) {
    setTimeout(argFunction, 1000);
}

function logger() {
    console.log("Fuck you!!!");
}

funcRunner(logger);