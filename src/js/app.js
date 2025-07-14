function generateGameboard(){
    const grid = document.querySelector('.grid'); 
   for (let i = 0; i < 9; i++){
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.cell = i;
    grid.appendChild(div);
    
   }
}


generateGameboard();