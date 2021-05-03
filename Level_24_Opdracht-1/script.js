// 'use strict';

/* Subopdracht Landenlijst */
const resultOfRegionsWithoutDuplicates = randomPersonData.reduce(
  (unique, o) => {
    if (!unique.some(obj => obj.region === o.region)) {
      unique.push(o);
    }
    return unique;
  },
  []
);

const addRegionListToDom = () => {
  for (let i = 0; i < resultOfRegionsWithoutDuplicates.length; i++) {
    const list = document.querySelector('#content');
    const listItem = document.createElement('li');
    const regions = resultOfRegionsWithoutDuplicates[i].region;

    list.appendChild(listItem);
    listItem.textContent = regions;
  }
};

const landenLijst = document.querySelector('#landenLijst');
landenLijst.addEventListener('click', addRegionListToDom); // ACTIVATIE LANDENLIJST BUTTON!!!!

/* Subopdracht Steenbokvrouwen */

// const listOfCapricornWomen = () => {
//   for (let i = 0; i < randomPersonData.length; i++) {
//     if (
//       randomPersonData[i].age > 30 &&
//       randomPersonData[i].gender === 'female'
//     ) {
//       const list = document.querySelector('#content');
//       const listItem = document.createElement('li');

//       list.appendChild(listItem);
//       listItem.textContent = `${randomPersonData[i].name}, ${randomPersonData[i].surname}, ${randomPersonData[i].photo}`;

//       console.log(randomPersonData[i]);
//     }
//   }
// };
// listOfCapricornWomen();

// const steenbokVrouwen = document.querySelector('#steenbokVrouwen');
// steenbokVrouwen.addEventListener('click', listOfCapricornWomen); //ACTIVATIE STEENBOKVROUWEN BUTTON!!!

/* TESTDATA */
const listOfCapricornWomen = () => {
  for (let i = 0; i < randomPersonData.length; i++) {
    const getZodiacSign = (day, month) => {
      if (
        (month == 1 && day < 20) ||
        (month == 12 &&
          day >= 22 &&
          randomPersonData[i].age > 30 &&
          randomPersonData[i].gender === 'female')
      ) {
        return randomPersonData[i];
      }
    };
    const list = document.querySelector('#content');
    const listItem = document.createElement('li');

    list.appendChild(listItem);
    listItem.textContent = `${randomPersonData[i].name}, ${randomPersonData[i].surname}, ${randomPersonData[i].photo}`;

    console.log(randomPersonData[i]);
  }
};
const steenbokVrouwen = document.querySelector('#steenbokVrouwen');
steenbokVrouwen.addEventListener('click', listOfCapricornWomen); //ACTIVATIE STEENBOKVROUWEN BUTTON!!!

const dayOfBirth = randomPersonData[0].birthday.dmy;
console.log(typeof dayOfBirth);
