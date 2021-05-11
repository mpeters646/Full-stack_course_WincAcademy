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
