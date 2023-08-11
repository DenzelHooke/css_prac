let message: string = 'hello';
//
const age: number = 21;

// Any variables with no type will be assigned a type of their assigned value at runtime unless any type.

const sales = 10_20_30;
const course = 'English';
// An unasigned variable is considered an "any" type variable and can be assigned any value like a dynmamically typed language.
let level;

function render(document: string) {
  console.log(document);
}

// Automatically defines a ttype based off what exists in array
const values = [1, 2, 3, 4, 5];

// Tells it to only allow number types within array
const values_2: number[] = [];

values_2.forEach((n) => n.toString());

const vals: string[] = ['1'];
const ages: number[] = [1];

// TUple
const user: [number, string] = [10, 'John Doe'];

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// Any values not given, default to 0
const enum Size {
  Small = 3,
  Medium,
  Large,
}
// enum Size {
//   Small = 1,
//   Medium = 2,
//   Large,
// }

const mySize: Size = Size.Medium;

const height = 4;

// Functions

// Catches return values set to wrong type
// function calcTax(income: number): number {
//   return 'hello';
// }

// function calcTax(income: number, tax_year: number): number {
//   if (tax_year < 2022) {
//     return income * 1.2;
//   }

//   return income * 1.3;
// }

// ? = optional

// function calcTax(income: number, tax_year?: number): number {
//   if ((tax_year || 2022) < 2022) {
//     return income * 1.2;
//   }

//   return income * 1.3;
// }

// We also have the option to set default variables instead which can be overwritten with arguments
function calcTax(income: number, tax_year = 2022): number {
  if (tax_year < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

console.log(calcTax(10_000, 1950));

// Objects

// Objects must have defined  types when creating object.
// Object properties can be set to read only.
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: '',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.name = 'Denzel';

// type aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
const employee: Employee = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = 'Denzel';

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// & means variable can be both string and number
let weight: number & string;

// Defining an object with 2 different types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal type(Exact | specific value)

// const quantity: 50 | 100 = 50;

// type Quantity = 50 | 100;
// const quantity: Quantity = 50;
