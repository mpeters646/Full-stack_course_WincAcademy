const age = 19;
const isFemale = true;
const driverStatus = "";
const name = "Sarah";
const totalAmount = 100;

if (age >= 18) {
  console.log("You are allowed to come in.");
} else {
  console.log("You are not allowed to come in, because you are to young!");
}

if (isFemale) {
  console.log("Welcome to the ladiesnight");
} else {
  console.log("Sorry only ladies tonight.");
}

if (driverStatus == "bob") {
  console.log("Get home safely.");
} else {
  console.log("You have a few drinks, you're not allowed to drive!");
}

if (age >= 18 && age <= 25) {
  console.log("You get a 50% discount!");
}

if (name === "Bram" || name === "Sarah") {
  console.log("You get a free beer");
} else {
  console.log("Sorry only Bram or Sarah get a free beer.");
}

if (totalAmount >= 100) {
  console.log("You get a free bottle of champagne");
} else if (totalAmount > 50) {
  console.log("You get a free portion of nachos");
} else if (totalAmount > 25) {
  console.log("You get a free portion of (veggie) bittet balls");
} else {
  console.log("With an order above € 25 you get tasty extras");
}
