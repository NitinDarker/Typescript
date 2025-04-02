// Create a class that implements this interface:

interface Human {
  name: string;
  age: number;
  newGreet: (phrase: string) => void;
  newGreet2?(phrase: string): void;
}

class Employee implements Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  newGreet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}


// class Employee implements Human {
//     constructor(public name: string, public age: number) {}
//     newGreet(phrase: string): void {
//         console.log(phrase + " " + this.name);
//     }
// }

let obj = new Employee("Harry", 50);
obj.newGreet("Good Night");