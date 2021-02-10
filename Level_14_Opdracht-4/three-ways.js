/* Function declaration */
function multiplyWithNumbers1(num1, num2) {
  const totalMultiply1 = num1 * num1 + num2 * num2;
  return totalMultiply1 * totalMultiply1;
}

console.log(multiplyWithNumbers1(2, 5));

/* Function expression */
const multiplyWithNumbers2 = function (num1, num2) {
  const totalMultiply2 = num1 * num1 + num2 * num2;
  return totalMultiply2 * totalMultiply2;
};

console.log(multiplyWithNumbers2(2, 5));

/* Arrow function */
const multiplyWithNumbers3 = function (num1, num2) {
  const totalMultiply3 = num1 * num1 + num2 * num2;
  return totalMultiply3 * totalMultiply3;
};

console.log(multiplyWithNumbers3(2, 5));
