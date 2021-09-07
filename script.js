const grid = document.querySelector('.grid');
const sizeSlider = document.querySelector('.slider');
const btnBlack = document.querySelector('.btn__black');
const btnRainbow = document.querySelector('.btn__rainbow');
const btnEraser = document.querySelector('.btn__eraser');
const btnRefresh = document.querySelector('.btn__refresh');
const showCurrentSize = document.querySelector('.span__size');

const defaultSize = 16;
const defaultColor = 'black';
const defaultMode = 'black';

let currentSize = defaultSize;
let currentColor = defaultColor;
let currentMode = defaultMode;

sizeSlider.onchange = (e) => changeSize(e.target.value);
btnBlack.onclick = (e) => setCurrentMode(e.target.dataset.color);
btnRainbow.onclick = (e) => setCurrentMode(e.target.dataset.color);
btnEraser.onclick = (e) => setCurrentMode(e.target.dataset.color);
btnRefresh.onclick = () => refresh();

const setupGrid = function (size) {
  grid.style.grid = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  let gridArea = size * size;

  for (let i = 0; i < gridArea; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', changeColor);
    grid.appendChild(div);
  }
};

const setCurrentMode = function (mode) {
  currentMode = mode;
  activeBtn(mode);
};

const changeSize = function (value) {
  currentSize = +value;
  showCurrentSize.textContent = `${currentSize} x ${currentSize}`;
  reloadGrid();
};

const reloadGrid = function () {
  grid.innerHTML = '';
  setupGrid(currentSize);
};

const changeColor = function (e) {
  if (currentMode === 'black') e.target.style.backgroundColor = defaultColor;
  if (currentMode === 'rainbow')
    e.target.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
  if (currentMode === 'eraser') e.target.style.backgroundColor = 'white';
};

const activeBtn = function (mode) {
  if (currentMode !== 'black') {
    btnBlack.classList.remove('active');
  }
  if (currentMode !== 'rainbow') {
    btnRainbow.classList.remove('active');
  }
  if (currentMode !== 'eraser') {
    btnEraser.classList.remove('active');
  }

  if (mode === 'black') {
    console.log(mode);
    btnBlack.classList.add('active');
  }
  if (mode === 'rainbow') {
    console.log(mode);
    btnRainbow.classList.add('active');
  }
  if (mode === 'eraser') {
    btnEraser.classList.add('active');
  }
};

const refresh = function () {
  window.location.reload();
};

window.onload = () => {
  setupGrid(currentSize);
};
