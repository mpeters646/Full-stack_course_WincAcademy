const theGame = () => {
  const person = prompt('Welkom! Wat is je naam?', 'Harry Potter');

  if (person != null) {
    alert(`Hey ${person}!`);
  }

  let lowestNumber = parseInt(
    prompt(`Wat is het laagste getal waarmee je wilt spelen?`)
  );
  let highestNumber = parseInt(
    prompt(`Wat is het hoogste getal waarmee je wilt spelen?`)
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
  console.log(`Winnende nummer: ${randomNumber}`);

  for (i = 0; i < 5; i++) {
    const getNumberOfGamer = () => {
      const numberOfGamer = prompt(
        `Voer een nummer in van ${lowestNumber} tot ${highestNumber} om te raden...`
      );
      if (numberOfGamer >= lowestNumber && numberOfGamer <= highestNumber) {
        return numberOfGamer;
      } else if (isNaN(numberOfGamer) || numberOfGamer === null) {
        alert(
          `Dit is geen nummer, vul een nieuw getal tussen de ${lowestNumber} en ${highestNumber} in`
        );
        return numberOfGamer;
        getNumberOfGamer();
      } else {
        alert(
          `Jou nummer is groter dan ${highestNumber} of kleiner dan ${lowestNumber}, kies een nieuw getal tussen de ${lowestNumber} en ${highestNumber}`
        );
        return numberOfGamer;
        getNumberOfGamer();
      }
    };

    let numberOfGamer = getNumberOfGamer();

    if (randomNumber == numberOfGamer) {
      console.log(`Jou ingevoerde getal: ${numberOfGamer} is juist`);
      alert(
        `Gefeliciteerd ${person} je hebt gewonnen, ${numberOfGamer} is het winnende getal.`
      );
      break;
    } else if (i < 4 && i !== 5) {
      console.log(`Jou ingevoerde getal: ${numberOfGamer} is niet juist`);
      alert(
        `Jou ingevoerde getal: ${numberOfGamer} is niet juist, je ${
          i + 1
        }e beurt van 5 is voorbij.`
      );
    } else {
      console.log(`Jou ingevoerde getal: ${numberOfGamer} is niet juist`);
      alert(
        `Jou ingevoerde getal: ${numberOfGamer} is niet juist, al je beurten zijn voorbij het spel is uit. Dag ${person} tot de volgende keer.`
      );
    }
  }
};
