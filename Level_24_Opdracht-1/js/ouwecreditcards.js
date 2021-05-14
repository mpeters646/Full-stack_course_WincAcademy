'use strict';

const listOfOldCreditcards = () => {
  clearList();

  randomPersonData.forEach(person => {
    const fullName = `${person.name} ${person.surname}`;
    const phoneNumber = `Phone: ${person.phone}`;
    const ccNumber = `Card: ${person.credit_card.number}`;
    const expirationDate = `Expires: ${person.credit_card.expiration}`;

    if (person.age > 17) {
      const list = document.querySelector('#content');
      const listItem = document.createElement('li');
      const name = document.createElement('span');
      name.appendChild(document.createTextNode(fullName));
      const phone = document.createElement('span');
      phone.appendChild(document.createTextNode(phoneNumber));
      const card = document.createElement('span');
      card.appendChild(document.createTextNode(ccNumber));
      const expires = document.createElement('span');
      expires.appendChild(document.createTextNode(expirationDate));

      list.appendChild(listItem);
      listItem.appendChild(name);
      listItem.appendChild(phone);
      listItem.appendChild(card);
      listItem.appendChild(expires);

      console.log(person, person.credit_card.expiration);
    }
  });
};

document
  .querySelector('#ouweCreditcards')
  .addEventListener('click', listOfOldCreditcards); //ACTIVATIE OUWE CREDITCARDS
