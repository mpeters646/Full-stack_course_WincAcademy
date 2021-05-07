'use strict';

const clearList = () => {
  document.querySelector('#content').innerHTML = '';
};

/* Subopdracht Landenlijst */
let sortedRandomPersonData = randomPersonData.sort((a, b) => {
  return a.region.localeCompare(b.region);
});

const resultOfRegionsWithoutDuplicates = sortedRandomPersonData.reduce(
  (unique, o) => {
    if (!unique.some(obj => obj.region === o.region)) {
      unique.push(o);
    }
    return unique;
  },
  []
);

const addRegionListToDom = () => {
  clearList();
  for (let i = 0; i < resultOfRegionsWithoutDuplicates.length; i++) {
    const list = document.querySelector('#content');
    const listItem = document.createElement('li');
    const regions = resultOfRegionsWithoutDuplicates[i].region;

    list.appendChild(listItem);
    listItem.innerHTML = regions;
  }
};
const landenLijst = document.querySelector('#landenLijst');
landenLijst.addEventListener('click', addRegionListToDom); // ACTIVATIE LANDENLIJST BUTTON!!!!

/* Subopdracht Steenbokvrouwen */
const listOfCapricornWomen = () => {
  clearList();
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
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const figCaption = document.createElement('figcaption');
        const textContent = document.createTextNode(
          `${randomPersonData[i].name}, ${randomPersonData[i].surname}`
        );

        image.setAttribute('src', randomPersonData[i].photo);
        figCaption.appendChild(textContent);
        figure.appendChild(image);
        figure.appendChild(figCaption);
        listItem.appendChild(figure);
        list.appendChild(listItem);
      }
    }
  }
};
const steenbokVrouwen = document.querySelector('#steenbokVrouwen');
steenbokVrouwen.addEventListener('click', listOfCapricornWomen); //ACTIVATIE STEENBOKVROUWEN BUTTON!!!

/* TEST */
