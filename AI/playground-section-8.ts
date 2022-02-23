// interface Person {
//   name: string;
//   age: number;
//   grades: number[];
// }

// type CustomArray<T> = {
//   [index: number]: T;
// };

// type CustomObject<T = string | number | Person> = { [key: string]: T };

// type SingleType<T> = T extends any[] ? T[number] : T;

// type ReturnType<T> = T extends () => infer R ? R : number;

// type PersonKey = keyof Person;

// type Logger<FP = string, SP = number, RT = string> = (
//   param1: FP,
//   param2: SP
// ) => RT;

export default async function play8() {
  //   type Type1 = SingleType<string[]>;
  //   type Type2 = SingleType<number[]>;
  //   type Type3 = SingleType<Person>;
  //   const items: CustomArray<string> = ['1', '2', '3'];
  //   const items2: CustomArray<number> = [1, 2, 3];
  //   type Single = CustomArray[number];
  //   const person: CustomObject = {
  //     age: 24,
  //     name: 'Bob',
  //     city: 'London',
  //     person: { name: 'Sam' },
  //   };
  //   function logger() {
  //     return true;
  //   }
  //   const kindaLogger: typeof logger = (name: string, age: number) => 'Hi Guys';
  //   const person = { name: 'Bob', age: 24 };
  //   const person2: typeof person = { name: 'Sam', age: 23 };
  //   kindaLogger('Bob', 24);
  //   const loggerReturn: ReturnType<typeof logger> = true;
  //   const personKey: PersonKey = 'grades';
  //   const superLogger: Logger<string, number, string> = (name, age) => {
  //     return 'Hello World';
  //   };
  //   const logger: Logger = (brand, age) => {
  //     return brand + age;
  //   };

  type Greeting = { message: string };
  type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }>
    ? Props
    : never;

  const getHelloProps = async () => {
    const greeting: Greeting = { message: 'Hi Friends' };
    return {
      props: {
        greeting,
        data: { cars: ['BMW', 'Audi', 'Mercedes'] },
      },
    };
  };

  //   const data = await getHelloProps();
  function sayHello(props: InferHelloProps<typeof getHelloProps>) {
    console.log(props.greeting);
  }
}
