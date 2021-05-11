'use strict';

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

const listOfRegions = () => {
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
landenLijst.addEventListener('click', listOfRegions); // ACTIVATIE LANDENLIJST BUTTON!!!!
