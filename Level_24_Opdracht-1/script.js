'use strict';

const button = document.querySelectorAll('button');
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    // console.log(button[i]);
  });
}

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
    listItem.innerHTML = regions;
    console.log(regions);
  }
};
const landenLijst = document.querySelector('#landenLijst');
landenLijst.addEventListener('click', addRegionListToDom); // ACTIVATIE LANDENLIJST BUTTON!!!!

/* Subopdracht Steenbokvrouwen */
const listOfCapricornWomen = () => {
  for (let i = 0; i < randomPersonData.length; i++) {
    const dayOfBirth = Number(randomPersonData[i].birthday.dmy.substring(0, 2));
    const monthOfBirth = Number(
      randomPersonData[i].birthday.dmy.substring(3, 5)
    );

    if (
      (monthOfBirth == 1 && dayOfBirth < 20) ||
      (monthOfBirth == 12 && dayOfBirth >= 22)
    ) {
      if (
        randomPersonData[i].age > 30 &&
        randomPersonData[i].gender === 'female'
      ) {
        const list = document.querySelector('#content');
        const listItem = document.createElement('li');

        list.appendChild(listItem);
        listItem.textContent = `${randomPersonData[i].name}, ${randomPersonData[i].surname}, ${randomPersonData[i].photo}`;
      }
      // console.log(randomPersonData[i]);
    }
  }
};
const steenbokVrouwen = document.querySelector('#steenbokVrouwen');
steenbokVrouwen.addEventListener('click', listOfCapricornWomen); //ACTIVATIE STEENBOKVROUWEN BUTTON!!!
