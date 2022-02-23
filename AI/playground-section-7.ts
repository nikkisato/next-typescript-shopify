interface Person {
  name: string;
  age: number;
}

// class Student implements Person {
//   name = '';
//   age = 0;
//   city: '';
// }

interface Student extends Person {
  age: number;
}
interface PostGraduateStudent extends Person {
  age: number;
  projects: string[];
}

// class BusinessPerson implements Person {
//   name = '';
//   age = 0;
//   city: '';
//   salary = 1000;
// }
// interface Car {
//   name: string;
// }

// type Car = {
//   brand: string;
//   age: number;
//   name: string;
//   city: string;
// };

// class Logger<T extends Person = Car> {
//   log(items: Array<T>, callback: (i: T) => void) {
//     items.forEach((item) => {
//       callback(item);
//     });
//   }
// }

// type StudentInfo<T extends Student = Student> = {
//   data: T;
//   grades: number[];
// };

type StudentInfo<T extends any = Student> = T extends Student
  ? {
      data: T;
      grades: number[];
    }
  : string;

export default function play7() {
  //   function iterate(items: Array<string>) {
  //     items.forEach((item) => {
  //       console.log(item.toUpperCase());
  //     });
  //   }
  //   iterate(['Foo', 'Bar', 'Baz', 'Qux']);
  //   const logger = new Logger();
  //   const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
  //   logger.log(cars, (car) => {
  //     console.log(car);
  //   });
  //   const logger2 = new Logger<number>();
  //   const numbers = [1, 2, 3, 4, 5];
  //   logger2.log(numbers, (number) => {
  //     console.log(number);
  //   });
  //   const logger = new Logger<Person>();
  //   const persons = [
  //     { name: 'Bob', age: 20 },
  //     { name: 'Alice', age: 30 },
  //     { name: 'Tiff', age: 40 },
  //   ];
  //   logger.log(persons, (person) => {
  //     console.log(person);
  //   });
  //   const logger = new Logger<Student>();
  //   const persons = [
  //     { name: 'Bob', age: 20, city: 'London' },
  //     { name: 'Alice', age: 30, city: 'London' },
  //     { name: 'Tiff', age: 40, city: 'London' },
  //   ];
  //   logger.log(persons, (person) => {
  //     console.log(person);
  //   });
  //   const logger = new Logger();
  //   const persons = [
  //     { name: 'Bob', age: 20, city: 'London', brand: 'BMW' },
  //     { name: 'Alice', age: 30, city: 'London', brand: 'BMW' },
  //     { name: 'Tiff', age: 40, city: 'London', brand: 'BMW' },
  //   ];
  //   logger.log(persons, (person) => {
  //     console.log(person);
  //   });

  function logStudentInfo(info: StudentInfo<Student>) {
    console.log(info.data.age);
    console.log(info.data.name);
  }

  const info = { data: { name: 'Bob', age: 20 }, grades: [1, 2, 3] };

  logStudentInfo(info);
}
