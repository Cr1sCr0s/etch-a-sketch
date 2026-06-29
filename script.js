const sizeBtn = document.querySelector('#grid-size');
const container = document.querySelector('.container');
let gridSize = 16;
resizeGrid(gridSize, container);

sizeBtn.addEventListener('click', () => {
    gridSize = +(prompt('Enter grid size (max 100)', '16'));
    if(gridSize > 100) gridSize = 100;
    if(gridSize < 0) gridSize = 3;
    resizeGrid(gridSize, container);
  }
);

function resizeGrid(gridSize, container){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  
  const minSize = ((1/gridSize) * 100) + '%';

  for(let i=0; i<(gridSize * gridSize); i++){
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.style.minHeight = minSize;
    box.style.minWidth = minSize;
    box.addEventListener(
      'mouseenter', () => box.style.backgroundColor = 'black'
    );
    container.appendChild(box);
  }
}
