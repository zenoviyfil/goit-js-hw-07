function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const controls = document.getElementById('controls');
const boxes = document.getElementById('boxes')

const input = controls.firstElementChild;
const amount = input.value;
let box = '';
let size = 30;


function createBoxes(amount) {
   for (let i = 1; i <= input.value; i++) {
    box = `<div width=${size}px height=${size}px background-color=${getRandomHexColor()}></div>`;
    size += 10;
   }
  boxes.insertAdjacentHTML('afterbegin', box);
}

 createBtn.addEventListener('click', () => {
   if (amount > 0 && amount <= 100) {
     createBoxes(amount);
   }
 });

 destroyBtn.addEventListener('click', () => {
  input.value = '';
  boxes.innerHTML = '';
 })


 console.dir(controls)
 console.log(box)
 console.log(createBoxes())
 