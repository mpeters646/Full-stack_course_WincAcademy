// WHILE loop
console.log("While loop:");

const colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}
console.log("**********");
// FOR loop
console.log("For loop:");

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("**********");

// FOREACH loop
console.log("Foreach loop");
colors.forEach(color => console.log(color));
console.log("**********");

// 1. The while loop takes 4 lines, the for loop takes 3 lines
// 2. The foreach loop takes up 1 line

// FOR IN loop
const persons = {
  firstName: "John",
  lastName: "Doe",
  age: 39,
  gender: "male",
  hobby: "painting",
};

for (property in persons) {
  console.log(`${property}: ${persons[property]}`);
}
