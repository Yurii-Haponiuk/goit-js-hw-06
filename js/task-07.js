const resizingInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

const textResizing = () => {
  onText.style.fontSize = `${resizingInput.value}px`;
};

resizingInput.addEventListener('input', textResizing);