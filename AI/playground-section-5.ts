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

type Human =
  | BusinessPerson
  | AcademicPerson
  | { kind: 'otherType'; special: string };

// type Car = {
//   name: string;
// };

// type RaceCar = {
//   speed: number;
// } & Car & {
//     mileage: number;
//   };

type RaceCar = {
  name: string;
  maxSpeed: 200;
  team: string;
};

type CityCar = {
  name: string;
  space: string;
  maxSpeed: 100;
};

type Car = RaceCar | CityCar;

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

  const car: RaceCar = {
    name: 'Ford',
    maxSpeed: 200,
    team: 'Ferrari',
  };

  function logPersonInfo(human: Human) {
    if (human.kind === 'academic') {
      console.log(human.name, human.publications);
    } else if (human.kind === 'business') {
      console.log(human);
    } else if (human.kind === 'otherType') {
      console.log(human);
    } else {
      console.log(human);
    }
  }

  // Union Types only in common
  function logCarInfo(car: Car) {
    console.log(car.name);

    switch (car.maxSpeed) {
      case 200:
        console.log(car.team);
        break;
      case 100:
        console.log(car.space);
        break;
      default:
        break;
    }
  }
}
