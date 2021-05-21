// 'use strict';

const sortByExpirationDate = randomPersonData => {
  return randomPersonData.sort((a, b) => {
    return (
      new Date(a.credit_card.expiration) - new Date(b.credit_card.expiration)
    );
  });
};

const listOfOldCreditcards = () => {
  clearList();
  sortByExpirationDate(randomPersonData);

  randomPersonData.forEach(person => {
    const parts = person.credit_card.expiration.split('/');
    const year = parseInt('20' + parts[1]);
    const month = parseInt(parts[0] - 1);
    const expireDate = new Date(parseInt(year), parseInt(month));
    const date = expireDate.toDateString();
    const newDate = [year, month];

    console.log(person.credit_card);
    console.log(parts);
    console.log(date);
    console.log(year, month);
    console.log(newDate);

    /* ***************************************************************** */
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
    }
  });
};

document
  .querySelector('#ouweCreditcards')
  .addEventListener('click', listOfOldCreditcards); //ACTIVATIE OUWE CREDITCARDS
