function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const controls = document.getElementById('controls');
const input = controls.firstElementChild;

let size = 30;

function createBoxes(amount) {
   for (let i = 0; i < amount; i++) {
    size += 10;
    const boxDiv = document.createElement('div');
    boxDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxes.insertAdjacentElement('afterbegin', boxDiv);
   }
   input.value = '';
}

 createBtn.addEventListener('click', () => {
   if (input.value > 0 && input.value <= 100) {
     createBoxes(input.value);
   }
 });

 destroyBtn.addEventListener('click', () => {
  input.value = '';
  boxes.textContent = '';
 })