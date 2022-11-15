 const createBtn = document.querySelector('[data-create]');
 const destroyBtn = document.querySelector('[data-destroy]');
 const newBox = document.querySelector('#boxes');
 const input = document.querySelector('#controls input');
createBtn.addEventListener('click', createBox);
destroyBtn.addEventListener('click', destroyBoxes);
function createBox() {
  let amount = input.value;
  createBoxes(amount);
}
function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const randomColor = getRandomHexColor();
    div.style.backgroundColor = randomColor;
    div.style.width = size +'px';
    div.style.height = size +'px';
    div.style.marginTop = '10px';
    fragment.appendChild(div);
    size += 10;
    newBox.append(fragment);
  }
}
function destroyBoxes() {
  newBox.innerHTML = '';
}
