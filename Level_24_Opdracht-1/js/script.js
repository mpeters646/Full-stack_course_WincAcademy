'use strict';

const clearList = () => {
  document.querySelector('#content').innerHTML = '';
};

/* Test */
const people = [
  { id: 12, name: 'Billy', dob: '1998-10-05' },
  { id: 123, name: 'Bart', dob: '1993-02-15' },
  { id: 45, name: 'Belinda', dob: '1996-01-31' },
  { id: 67, name: 'Bonnie', dob: '1998-04-09' },
  { id: 89, name: 'Brenda', dob: '1996-07-08' },
  { id: 34, name: 'Bobby', dob: '1994-09-12' },
  { id: 234, name: 'Blake', dob: '2000-01-01' },

  // { id: 12, name: 'Billy', dob: '1998/10/05' },
  // { id: 123, name: 'Bart', dob: '1993/02/15' },
  // { id: 45, name: 'Belinda', dob: '1996/01/31' },
  // { id: 67, name: 'Bonnie', dob: '1998/04/09' },
  // { id: 89, name: 'Brenda', dob: '1996/07/08' },
  // { id: 34, name: 'Bobby', dob: '1994/09/12' },
  // { id: 234, name: 'Blake', dob: '2000/01/01' },
];

// console.log('\n\n sort by date');
// console.log(people.sort(byDate));

// console.log('\n\n sort by birthday as it occurs during the year');
// console.log(people.sort(byBirthday));

function byDate(a, b) {
  // chronologically by year, month, then day
  return new Date(a.dob).valueOf() - new Date(b.dob).valueOf();
}

function byBirthday(a, b) {
  // by month and then by day
  let d1 = new Date(a.dob);
  let d2 = new Date(b.dob);

  // console.log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth());

  if (d1.getUTCMonth() > d2.getUTCMonth()) {
    return 1;
  } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
    return -1;
  } else {
    // same month
    return d1.getUTCDate() - d2.getUTCDate();
  }
}

let date = new Date(randomPersonData[199].credit_card.expiration);

// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
console.log(
  date.toLocaleString({
    year: '2-digit', //numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
    weekday: 'long', //long, short, narrow
    hour: 'numeric', //numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', //numeric, 2-digit
    timeZoneName: 'long', //long, short
  })
);

console.log(randomPersonData[199]);
console.log(date.toLocaleDateString());

// https://www.delftstack.com/howto/javascript/convert-string-to-date-in-javascript/
