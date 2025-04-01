// Implement Interface as a class

interface People {
  name: string;
  age: number;

  greet(): string;
  greet2?: () => string;
  // Both greet are same
}

class Person implements People {
    name: string = "Nitin";
    age: number = 20;
    greet() {
        return "Hello";
    }
}

let guy = new Person;
console.log(guy.greet());