/* Checking if a number is big */

const biggerThanHundred = function (number) {
  if (number > 100) {
    return 'true';
  } else {
    return 'false';
  }
};

const numberChecking = biggerThanHundred(101);
// console.log(numberChecking);

// This is a DO somthing function

/* Bouncer at a club */
const bouncer = function (maxPeople, currentPeople, age) {
  if (age >= 18) {
    if (maxPeople > currentPeople) {
      return 'come in';
    } else {
      return "it's too busy now, come back later";
    }
  } else {
    return 'this is a club for adults';
  }
};

// const brendaBot1 = bouncer(100, 80, 18);
// console.log(brendaBot1);

// const brendaBot2 = bouncer(80, 80, 25);
// console.log(brendaBot2);

// const brendaBot3 = bouncer(80, 60, 17);
// console.log(brendaBot3);

// This is a function that PRODUCE & DO somthing

/* Calculating the average */
const calcAverage = function (num1, num2, num3, num4, num5) {
  const average = Math.round((num1 + num2 + num3 + num4 + num5) / 5);
  return average;
};

const total = calcAverage(10, 25, 1, 55, 12);
console.log(total);

const total2 = calcAverage(8, 12, 39, 121, 5);
console.log(total2);

const total3 = calcAverage(99, 59, 21, 45, 8);
console.log(total3);

const total4 = calcAverage(101, 2, 75, 52, 4);
console.log(total4);

// This is a PRODUCE function
