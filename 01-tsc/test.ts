function delayedCall(argFunction: (x: number, y: number) => number) {
  setTimeout(() => {
    console.log(argFunction(5, 10)); // ✅ Log result inside setTimeout
  }, 1000);
}

function add(x: number, y: number): number {
  return x + y;
}

delayedCall(add); // ✅ No need for console.log(delayedCall(add))
