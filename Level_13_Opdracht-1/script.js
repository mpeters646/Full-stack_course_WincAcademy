const age = 39;
const isFemale = true;
const driverStatus = '';

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
