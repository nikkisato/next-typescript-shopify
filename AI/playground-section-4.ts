// interface Person {
//   name: string;
//   age: number;
// }

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// interface PersonLoggerFn {
//   (name: string, age: number): string;
// }

type PersonLoggerFn = (name: string, age: number) => string;

export default function play4() {
  console.log('Hello World');

  //   const name: string = 'John';
  const name: string = 'John';

  const age: number = 30;

  const person = {
    name: 'Bob',
    age: 33,
  };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number = 0
  ): string => {
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);

    return info;
  };

  function logPersonInfo2(person: Person) {
    // const info = 'Name: ' + personName + ', Age: ' + personAge;
    const info = `Name: ${person.name}, Age: ${person.age}`;
    console.log(info);

    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(new Person('Sam', 33));
}
