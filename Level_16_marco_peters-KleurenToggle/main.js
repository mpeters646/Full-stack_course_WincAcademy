// Toggle Menu
const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');

// toggles hamburger menu by mouse hover
const toggleHamburger = () => {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
};

ham.addEventListener('mouseover', toggleHamburger);

// Color Background
const body = document.body;
const text = document.getElementById('colorText');
const changeColorsByClicking = function () {
  text.innerText = `Color ${this.innerText}`;
  body.classList.remove('grey', 'red', 'orange', 'purple', 'green');
  body.classList.add(this.id);
};

const changeColorsByNumbers = function (addColor, addClass) {
  body.classList.remove('grey', 'red', 'orange', 'purple', 'green');
  text.innerText = `Color ${addColor}`;
  body.classList.add(addClass);
};

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleHamburger);
  menuLink.addEventListener('keydown', changeColorsByClicking);
});

// Selected button
const idToClass = document.querySelectorAll('.menuLink').forEach((button) => {
  button.addEventListener('click', changeColorsByClicking);
});

const changeClassName = () => {
  body.className.add('idToClass');
};

// KeyPress
const checkKeyPressed = (e) => {
  if (e.keyCode === 49) {
    addEventListener('keydown', changeColorsByNumbers('Grey', 'grey'));
  } else if (e.keyCode === 50) {
    addEventListener('keydown', changeColorsByNumbers('Red', 'red'));
  } else if (e.keyCode === 51) {
    addEventListener('keydown', changeColorsByNumbers('Orange', 'orange'));
  } else if (e.keyCode === 52) {
    addEventListener('keydown', changeColorsByNumbers('Purple', 'purple'));
  } else if (e.keyCode === 53) {
    addEventListener('keydown', changeColorsByNumbers('Green', 'green'));
  }
};

document.addEventListener('keydown', checkKeyPressed, false);
