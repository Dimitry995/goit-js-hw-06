function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = {
  sub: document.querySelector("[data-action='data-create']"),
  add: document.querySelector("[data-action='data-destroy']"),
  span: document.querySelector("#controlsInputNumber"),
};
const ulEl = document.querySelector('#boxes');
createBoxes = (amount) => {
  for (let i = 0; i <= amount; i += 1) {
    const makeListEl = document.createElement("div", style="size:30px 30px" + [i] = 10px; background-color:getRandomHexColor;");
    makeListEl.classList.add("box");
    makeListEl.textContent = ingredient;
    return makeListEl;
  };
}
destroyBoxes() => {
  return zero(#boxes);
}