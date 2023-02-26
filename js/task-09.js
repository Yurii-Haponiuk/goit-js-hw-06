function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector('.color').textContent = color;
}

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', changeBackgroundColor);
