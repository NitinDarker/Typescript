// Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(argFunction: (x: number, y: number) => number) {
  setTimeout(() => {
    console.log(argFunction(5, 10));
  }, 1000);
}

function add(x: number, y: number): number {
  return x + y;
}

delayedCall(add);