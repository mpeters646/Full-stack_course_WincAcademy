//  Function declaration
function sayHello1() {
  console.log("Hello 1");
}

sayHello1();

// Function expression
const sayHello2 = function () {
  console.log("Hello 2");
};

sayHello2();

//  Arrow function (also a function expression)
const sayHello3 = () => {
  console.log("Hello 3");
};

sayHello3();

function squaredTheNumberFunctionDeclaration(num1, num2) {
  const squaredNum1 = num1 * num1;
  const squaredNum2 = num2 * num2;
  const totalSum = squaredNum1 + squaredNum2;
  const squaredSum = totalSum * totalSum;
  return squaredSum;
}
const resultFunctionDeclaration = squaredTheNumberFunctionDeclaration(2, 11);

const squaredTheNumberFunctionExpression = function (num1, num2) {
  const squaredNum1 = num1 * num1;
  const squaredNum2 = num2 * num2;
  const totalSum = squaredNum1 + squaredNum2;
  const squaredSum = totalSum * totalSum;
  return squaredSum;
};
const resultFunctionExpression = squaredTheNumberFunctionExpression(2, 11);

const squaredTheNumberArrowFunction = (num1, num2) => {
  const squaredNum1 = num1 * num1;
  const squaredNum2 = num2 * num2;
  const totalSum = squaredNum1 + squaredNum2;
  const squaredSum = totalSum * totalSum;
  return squaredSum;
};
const resultArrowFunction = squaredTheNumberArrowFunction(2, 11);

console.log(`Function declaration: ${resultFunctionDeclaration}`);
console.log(`Function expression: ${resultFunctionExpression}`);
console.log(`Arrow function: ${resultArrowFunction}`);
