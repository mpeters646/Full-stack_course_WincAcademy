/* Checking if a number is big */

const bigNumber = function (number) {
  if (number > 100) {
    return 'true';
  } else {
    return 'false';
  }
};

console.log(bigNumber(101));
console.log(bigNumber(20));
console.log(bigNumber(51));
console.log(bigNumber(1024));

// This is a PRODUCE somthing function

/* Bouncer at a club */
const bouncer = function (maxVisitors, currentVisitors, ageVisitor) {
  if (ageVisitor >= 18) {
    if (maxVisitors > currentVisitors) {
      return 'come in';
    } else {
      return "it's too busy now, come back later";
    }
  } else {
    return 'this is a club for adults';
  }
};

console.log(bouncer(100, 80, 18));
console.log(bouncer(80, 80, 25));
console.log(bouncer(80, 60, 17));

// This is a function that PRODUCE & DO somthing

/* Calculating the average */
const calcAverage = function (num1, num2, num3, num4, num5) {
  const average = Math.round((num1 + num2 + num3 + num4 + num5) / 5);
  return average;
};

console.log(calcAverage(10, 25, 1, 55, 12));
console.log(calcAverage(8, 12, 39, 121, 5));
console.log(calcAverage(99, 59, 21, 45, 8));
console.log(calcAverage(-101, 2, 75, 52, 4));

// This is a DO function
