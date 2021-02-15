// WHILE loop

const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < 4) {
  console.log(colors[i]);
  i++;
}

// FOR loop

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// FOREACH loop
colors.forEach((color) => console.log(color));

// 1. De while loop neemt 4 regels inbeslag, de for loop neemt 3 regels inbeslag
// 2. De foreach loop neemt 1 regel inbeslag

// FOR IN loop
const persons = {
  firstName: 'John',
  lastName: 'Doe',
  age: 39,
  gender: 'male',
  hobby: 'painting',
};

for (property in persons) {
  console.log(`${property}: ${persons[property]}`);
}
