const button = document.querySelector("#mybutton");
const button2 = document.querySelector("#mybutton2");
const button3 = document.querySelector("#mybutton3");
const body = document.body;

const changeColor = () => {
  // body.classList.remove("blue-background");
  body.classList.add("red-background");
};

const toggleColor = () => {
  body.classList.toggle("red-background");
};

button.addEventListener("click", () => {
  alert("button clicked");
});
button2.addEventListener("click", changeColor);
button3.addEventListener("click", toggleColor);
