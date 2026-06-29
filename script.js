const sizeBtn = document.querySelector('#grid-size');
const container = document.querySelector('.container');

let gridSize = 16; // default size
createGrid(gridSize, container); // initial grid

sizeBtn.addEventListener('click', () => {
    gridSize = +(prompt('Enter grid size (min 1, max 100)', '16'));
    // min 1, max 100
    if(gridSize > 100) gridSize = 100;
    if(gridSize < 1) gridSize = 1;
    createGrid(gridSize, container);
  }
);

function createGrid(gridSize, container){
  while(container.firstChild){ // empty grid
    container.removeChild(container.firstChild);
  }
  
  // calculate min size of each box in percentage
  const minSize = ((1/gridSize) * 100) + '%';

  for(let i=0; i<(gridSize * gridSize); i++){
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.style.minHeight = minSize;
    box.style.minWidth = minSize;
    box.addEventListener(
      // random color on hover
      'mouseenter', () => box.style.backgroundColor = 'rgb(' 
      + getRandomInt(0, 255) + ',' 
      + getRandomInt(0, 255) + ',' 
      + getRandomInt(0, 255) + ')'
    );
    container.appendChild(box);
  }
}

// function thanks to https://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
