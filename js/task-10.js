function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.background = getRandomHexColor();
    document.querySelector('#boxes').appendChild(divEl);
  }
}

function destroyBoxes() {
  const boxesEl = document.querySelector('#boxes');
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
}

const controlsEl = document.querySelector('#controls');
const createButtonEl = controlsEl.querySelector('[data-create]');
const destroyButtonEl = controlsEl.querySelector('[data-destroy]');
const input = controlsEl.querySelector('input');

createButtonEl.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButtonEl.addEventListener('click', () => {
  destroyBoxes();
});