const button = document.querySelector('#mybutton');
const button2 = document.querySelector('#mybutton2');
const button3 = document.querySelector('#mybutton3');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  alert('button clicked');
});

const changeColor = () => {
  body.classList.add('red-background');
};

button2.addEventListener('click', changeColor);

const toggleColor = () => {
  body.classList.toggle('red-background');
};

button3.addEventListener('click', toggleColor);
