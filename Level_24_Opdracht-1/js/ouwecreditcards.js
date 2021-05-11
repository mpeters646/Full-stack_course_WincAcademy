'use strict';

const person = () => {
  for (let i = 0; i < randomPersonData.length; i++) {
    const fullName = `${randomPersonData[i].name} ${randomPersonData[i].surname}`;
    const phoneNumber = `Phone: ${randomPersonData[i].phone}`;
    const ccNumber = `Card: ${randomPersonData[i].credit_card.number}`;
    const expirationDate = `Expires: ${randomPersonData[i].credit_card.expiration}`;
    const person = `${fullName}\n${phoneNumber}\n${ccNumber}\n${expirationDate}`;
    console.log(person);
  }
  return person;
};

const listOfOldCreditcards = () => {
  clearList();
  person();

  for (let i = 0; i < randomPersonData.length; i++) {
    const fullName = `${randomPersonData[i].name} ${randomPersonData[i].surname}`;
    const phoneNumber = `Phone: ${randomPersonData[i].phone}`;
    const ccNumber = `Card: ${randomPersonData[i].credit_card.number}`;
    const expirationDate = `Expires: ${randomPersonData[i].credit_card.expiration}`;
    const person = `${fullName}\n${phoneNumber}\n${ccNumber}\n${expirationDate}`;
    console.log(person);

    const list = document.querySelector('#content');
    const listItem = document.createElement('li');
    const name = document.createElement('span');
    name.innerHTML = fullName;
    const phone = document.createElement('span');
    phone.innerHTML = phoneNumber;
    const card = document.createElement('span');
    card.innerHTML = ccNumber;
    const expires = document.createElement('span');
    expires.innerHTML = expirationDate;

    list.appendChild(listItem);
    listItem.appendChild(name);
    listItem.appendChild(phone);
    listItem.appendChild(card);
    listItem.appendChild(expires);
  }
};
document
  .querySelector('#ouweCreditcards')
  .addEventListener('click', listOfOldCreditcards); //ACTIVATIE OUWE CREDITCARDS
