const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

/*
// Filter Method
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(items);
console.log(filteredItems);
*/

/*
// Map Method
const itemNames = items.map((item) => {
  return item.price;
});

console.log(itemNames);
*/

/*
//  Find Method
const foundItem = items.find((item) => {
  return item.name === 'Album';
});

console.log(foundItem);
*/

/*
// ForEach Method
items.forEach((item) => {
  console.log(item.price);
});
*/

/*
// Some Method
const hasInexpesiveItems = items.some((item) => {
  return item.price <= 4;
});

console.log(hasInexpesiveItems);
*/

/*
// Every Method
const hasInexpesiveItems = items.every((item) => {
  return item.price <= 1000;
});

console.log(hasInexpesiveItems);
*/

/*
// Reduce Method
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);
*/

// Includes Method
const items2 = [1, 2, 3, 4, 5];

const includesTwo = items2.includes(7);

console.log(includesTwo);
