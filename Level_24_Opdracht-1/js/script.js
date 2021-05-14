'use strict';

const clearList = () => {
  document.querySelector('#content').innerHTML = '';
};

/* Current Date */
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

mm = (mm < 10 ? '0' : '') + mm;
dd = (dd < 10 ? '0' : '') + dd;

/* Test */

/* sorting by expirationDate */
const sortByExpirationDate = randomPersonData => {
  return randomPersonData.sort((a, b) => {
    return (
      new Date(a.credit_card.expiration) - new Date(b.credit_card.expiration)
    );
  });
};
console.log(sortByExpirationDate(randomPersonData));
