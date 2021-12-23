const { catBreeds } = require("./cat-breeds.js");

/* Deel 1: Objecten */

const person = {
  name: "Marco",
  age: 50,
  evaluations: [7, 10, 9],
};
// console.log(person);
// console.log(" ");
// console.log("Dot notation");
// console.log(`Persons name: ${person.name}`);
// console.log(`Persons age: ${person.age}`);
console.log(`Persons evaluations: ${person.evaluations}`);

// console.log("");
// console.log("Bracket notation");
// console.log(`Persons name: ${person["name"]}`);
// console.log(`Persons age: ${person["age"]}`);
// console.log(`Persons evaluations: ${person["evaluations"]}`); // Waarde is [7, 10, 9]
console.log("");

/* Deel 2: Arrays */

let myArray = ["green", "red", "blue"];

// console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);

console.log(myArray.push("yellow"));
console.log(myArray.push(5));
console.log(myArray.push({ greeting: "hi I'm a object" }));
// console.log(myArray);
console.log(myArray[myArray.length - 1]);
console.log("");

/* Deel 3: Real-life */

console.log(`Name last cat breed: ${catBreeds[catBreeds.length - 1].name}`);

console.log(`Energy level of the first cat: ${catBreeds[0].energy_level}`);

console.log(
  `First temperament of the second cat: ${catBreeds[1].temperament[0]}`
);

console.log(
  `Last temperament of the third cat: ${
    catBreeds[catBreeds.length - 1].temperament[4]
  }`
);

console.log(
  `Favorite food of the third cat: ${
    catBreeds[catBreeds.length - 1].food.favourite_food
  }`
);
