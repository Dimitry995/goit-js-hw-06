const button = {
  sub: document.querySelector("[data-action='change-color']"),
  add: document.querySelector("[data-action='change-color']"),
  span: document.querySelector(".color"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let counterValue = -;
const increment = () => {
  counterValue += getRandomHexColor;
 button.span.textContent = counterValue;
};
const decrement = () => {
  counterValue -= getRandomHexColor;
  button.span.textContent = counterValue;
};
button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);
