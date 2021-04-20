const age = 19;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Bram';
const totalAmount = 26;

if (age >= 18) {
  console.log('Wees welkom en kom gezellig binnen.');
} else {
  console.log(
    'Je bent nog geen 18 en mag daarom niet naar binnen, kom maar terug als je 18 bent.'
  );
}

if (isFemale) {
  console.log('Op onze Ladiesnight');
} else {
  console.log(
    'Sorry maar vanavond is het Ladiesnight en worden er geen mannen binnen gelaten. Tot ziens op een andere avond.'
  );
}

if (driverStatus == 'bob') {
  console.log('Rij voorzichtig naar huis.');
} else {
  console.log(
    'Na de drankjes die je hebt gehad mag je niet meer zelf rijden, zal ik een taxi voor je bellen?'
  );
}

if (age >= 18 && age <= 25) {
  console.log('Je krijgt 50% korting!');
}

if (name === 'Bram' || name === 'Sarah') {
  console.log('Je krijgt een gratis biertje');
} else {
  console.log('Je heet geen Bram of Sarah en moet gewoon betalen!');
}

if (totalAmount >= 100) {
  console.log('Je krijgt een gratis flesje champagne');
} else if (totalAmount > 50) {
  console.log('Je krijgt een gratis portie nachos');
} else if (totalAmount > 25) {
  console.log('Je krijgt een gratis portie (vega)bittetballen');
} else {
  console.log('Bij een bestelling vanaf €25 krijg je lekkere extras');
}
