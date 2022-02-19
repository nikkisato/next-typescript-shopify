// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

export default function play() {
  console.log('Hello World');

  const name: string = 'John';
  const age: number = 30;

  const person = {
    name: 'Bob',
    age: 33,
  };

  function logPersonInfo(personName: string, personAge: number) {
    // const info = 'Name: ' + personName + ', Age: ' + personAge;
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);

    return info;
  }

  function logPersonInfo2(person: { name: string; age: number }) {
    // const info = 'Name: ' + personName + ', Age: ' + personAge;
    const info = `Name: ${person.name}, Age: ${person.age}`;
    console.log(info);

    return info;
  }

  function logPersonInfo3(person: Person) {
    // const info = 'Name: ' + personName + ', Age: ' + personAge;
    const info = `Name: ${person.name}, Age: ${person.age}`;
    console.log(info);

    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
  logPersonInfo3(person);
}
