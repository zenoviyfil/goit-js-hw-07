function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
 
}

const createBtn = document.querySelector('button[data-action="create"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

