interface Person {
  kind: 'business' | 'academic' | 'otherType';
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  kind: 'business';
  salary: number;
}
interface AcademicPerson extends Person {
  kind: 'academic';
  publications: string[];
}

interface Person {
  prop1: string;
  prop2: number;
}

// type Human =
//   | BusinessPerson
//   | AcademicPerson
//   | { kind: 'otherType'; special: string };

// type Car = {
//   name: string;
// };

// type RaceCar = {
//   speed: number;
// } & Car & {
//     mileage: number;
//   };

// type RaceCar = {
//   name: string;
//   maxSpeed: 200;
//   team: string;
// };

// type CityCar = {
//   name: string;
//   space: string;
//   maxSpeed: 100;
// };

// type SUVCar = {
//   name: string;
//   isCarbonFree: boolean;
//   maxSpeed: 150;
// };

// type Car = RaceCar | CityCar | SUVCar;

type Noop = () => any;
type Noop2 = () => void;

export default function play5() {
  // const names: string[] = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
  // const numbers: Array<number> = [1, 2, 3, 4, 5];
  // const random = Math.random() > 0.5 ? 'Hello' : [1, 2];
  // if (typeof random === 'string') {
  //   const upper = random.toUpperCase();
  //   console.log(upper);
  // } else {
  //   console.log(random);
  // }
  // console.log(random);
  // const person: AcademicPerson = {
  //   name: 'Bob',
  //   age: 22,
  //   publications: ['JavaScript', 'TypeScript'],
  // };
  // const person2: BusinessPerson = {
  //   name: 'Bob',
  //   age: 22,
  //   salary: 1000,
  // };
  // function logPerson(person: Person) {}
  // logPerson(person2);
  // const car: RaceCar = {
  //   name: 'Ford',
  //   speed: 100,
  //   mileage: 100,
  // };
  // function logCar(car: Car) {
  //   console.log(car);
  // }
  //   const car: RaceCar = {
  //     name: 'Ford',
  //     maxSpeed: 200,
  //     team: 'Ferrari',
  //   };
  //   const person: Person = {
  //     prop1: 'hi',
  //     prop2: 2,
  //     name: 'Bob',
  //     kind: 'academic',
  //     age: 22,
  //   };
  //   function printInfo(someObject: { [key: string]: any }) {
  //     someObject.age.toUpperCase();
  //   }
  //   printInfo({ age: 23, name: 'Bob', isMarried: true });
  //   function logPersonInfo(human: Human) {
  //     if (human.kind === 'academic') {
  //       console.log(human.name, human.publications);
  //     } else if (human.kind === 'business') {
  //       console.log(human);
  //     } else if (human.kind === 'otherType') {
  //       console.log(human);
  //     } else {
  //       console.log(human);
  //     }
  //   }
  // Union Types only in common
  //   function logCarInfo(car: Car) {
  //     console.log(car.name);
  //     switch (car.maxSpeed) {
  //       case 200:
  //         console.log(car.team);
  //         break;
  //       case 100:
  //         console.log(car.space);
  //         break;
  //       case 150:
  //         console.log(car.isCarbonFree);
  //         break;
  //       default:
  //         const _never: never = car;
  //         return _never;
  //     }
  //   }

  function fn1(x: Noop): void {
    const result = x();
    result();
  }
  function fn2(x: Noop2): void {
    const result = x();
    result();
  }
}
