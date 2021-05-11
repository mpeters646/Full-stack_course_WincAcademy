'use strict';

const person = () => {
  for (let i = 0; i < randomPersonData.length; i++) {
    const fullName = `Fullname: ${randomPersonData[i].name} ${randomPersonData[i].surname}`;
    const phoneNumber = `Phonenumber: ${randomPersonData[i].phone}`;
    const ccNumber = `CreditCard Number: ${randomPersonData[i].credit_card.number}`;
    const expirationDate = `Expiration Date: ${randomPersonData[i].credit_card.expiration}`;
    const person = `${fullName}\n${phoneNumber}\n${ccNumber}\n${expirationDate}`;
    console.log(person);
  }
};

const listOfOldCreditcards = () => {
  clearList();
  const list = document.querySelector('#content');
  list.innerText = `${dd}-${mm}-${yyyy}`;
};
document
  .querySelector('#ouweCreditcards')
  .addEventListener('click', listOfOldCreditcards); //ACTIVATIE OUWE CREDITCARDS
