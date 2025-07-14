
function generateGameboard(gridSize){
    const grid = document.querySelector('.grid'); 
    grid.innerHTML = "";
    grid.style.setProperty('--grid-size', gridSize);
    for (let i = 0; i < gridSize * gridSize; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.cell = i;
    grid.appendChild(cell);
   }
}

generateGameboard(3);
