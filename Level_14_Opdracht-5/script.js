/*  ========================
        Hey kiddo 
    ======================== */
const ageCheck = function (age) {
  if (age >= 18) {
    return 'Hello there';
  }
  return 'Hey kiddo';
};

const greeting = function (age) {
  return ageCheck(age);
};

console.log(greeting(11));
console.log(greeting(17));
console.log(greeting(18));
console.log(greeting(39));

/*  ========================
        VAT calculations 
    ======================== */

// Exercise 1
const vatOnly = function (price, vat) {
  const onlyVat = (price * vat) / 100;
  return onlyVat;
};

const priceInclVat = function (price, vat) {
  const priceToBe = price + vatOnly(price, vat);
  return priceToBe.toFixed(2);
};

console.log(priceInclVat(1000, 21));
console.log(priceInclVat(2, 9));

// Exercise 2
const priceInclVat2 = function (price, vat) {
  const priceExclVat = price / (vat / 100 + 1);
  return priceExclVat;
};

const exclPriceVat = function (price, vat) {
  const tax = price - priceInclVat2(price, vat);
  const amount = price - tax;
  const amountTax = {
    basePrice: amount.toFixed(2),
    vat: tax.toFixed(2),
  };
  return amountTax;
};

console.log(exclPriceVat(1210, 21));
console.log(exclPriceVat(2.18, 9));
