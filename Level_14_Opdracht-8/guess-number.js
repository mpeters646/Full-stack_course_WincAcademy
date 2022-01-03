const theGame = () => {
  const person = prompt("Welcome! What's your name?", "Harry Potter");

  if (person != null) {
    alert(`Hey ${person}!`);
  }

  let lowestNumber = parseInt(
    prompt(`What is the lowest number you want to play with?`)
  );
  let highestNumber = parseInt(
    prompt(`What is the highest number you want to play with?`)
  );

  // const getRandomNumberBetweenTwoNumbers = (min, max) => {
  //   console.log(`min: ${min}`);
  //   console.log(`max: ${max}`);
  //   const randomValue = Math.random();
  //   console.log(`randomValue: ${randomValue}`);
  //   const randomNumber = randomValue * (max - min);
  //   console.log(`randomNumber ${randomNumber}`);
  //   const rounded = Math.floor(randomNumber);
  //   const roundedMin = rounded + lowestNumber;
  //   console.log(typeof roundedMin);
  //   return roundedMin;
  // };

  const getRandomNumberBetweenTwoNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomNumber = getRandomNumberBetweenTwoNumbers(
    lowestNumber,
    highestNumber
  );
  console.log(`winning number: ${randomNumber}`);

  for (i = 0; i < 5; i++) {
    const getNumberOfGamer = () => {
      const numberOfGamer = prompt(
        `Enter a number from ${lowestNumber} till ${highestNumber} to guess...`
      );
      if (numberOfGamer >= lowestNumber && numberOfGamer <= highestNumber) {
        return numberOfGamer;
      } else if (isNaN(numberOfGamer) || numberOfGamer === null) {
        alert(
          `This is not a number, enter a new number between ${lowestNumber} and ${highestNumber}`
        );
        return numberOfGamer;
        getNumberOfGamer();
      } else {
        alert(
          `Your number is greater than ${highestNumber} or less than ${lowestNumber}, choose a new number between ${lowestNumber} and ${highestNumber}`
        );
        return numberOfGamer;
        getNumberOfGamer();
      }
    };

    let numberOfGamer = getNumberOfGamer();

    if (randomNumber == numberOfGamer) {
      console.log(`Your entered number: ${numberOfGamer} is correct`);
      alert(
        `Congratulations ${person} you won, ${numberOfGamer} is the winning number.`
      );
      break;
    } else if (i < 4 && i !== 5) {
      console.log(`Your entered number: ${numberOfGamer} is not correct`);
      alert(
        `Your entered number: ${numberOfGamer} is not correct, your ${
          i + 1
        }th turn of 5 is over.`
      );
    } else {
      console.log(`Your entered number: ${numberOfGamer} is not correct`);
      alert(
        `Your entered number: ${numberOfGamer} is not correct, the game is over. Goodbye ${person} until next time.`
      );
    }
  }
};
