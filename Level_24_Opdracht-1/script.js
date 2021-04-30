'use strict';

const addRegionListToDom = () => {
  for (let i = 0; i < randomPersonData.length; i++) {
    const list = document.querySelector('#content');
    const listItem = document.createElement('li');
    const regions = randomPersonData[i].region;

    list.appendChild(listItem);
    listItem.textContent = regions;
  }
};
addRegionListToDom(randomPersonData);
