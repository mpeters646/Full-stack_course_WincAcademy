let name = 'Marco';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Marco';
let lastName = 'Peters';

/* Constants */
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const interestRate2 = 0.3;
// interestRate2 = 1;
console.log(interestRate2);

/* Primitive Types */

// Primitives/Value Types
// String
// Number
// Boolean
// Undefined
// Null

let name2 = 'Marco'; // String Literal (between 'single' or "double" quotes)
let age = 50; // Number Literal
let isApproved = true; // Boolean Literal (only true or false)
let firstName2; // (will results undefined)
let firstName3 = undefined; // (will not used)
let selectedColor = null; // (will used for clearing a variable)

// Reference Types
// Object
// Array
// Function

/* Dynamic Typing */
// Static (Statically-typed)
// string name = 'John';

// Dynamic (Dynamically-typed)
// let name = 'John';

console.log(typeof name2);
console.log(typeof age);
console.log(typeof firstName2);
console.log(typeof firstName3);
console.log(typeof isApproved);
console.log(typeof selectedColor);

/* Objects */
let person = {
  name: 'Marco',
  age: 50,
};

console.log(person);

// Dot Notation
person.name = 'John';

console.log(person);
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';

console.log(person);
console.log(person['name']);

/* Arrays */
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[1]);

/* Functions */

// Function declaration (old way of declare)

// Performing a value
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName + '!');
}

greet('Marco', 'Peters');
greet('Winc', 'Academy');

/* Types of Functions */

// Calculatihg a value
function square(number) {
  return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(5));
console.log(square(9));
