function generateGameBoard(boardSize, board) {
    board.innerHTML = '';
    board.style.setProperty('--grid-size', boardSize);
    for (let i = 0; i < boardSize * boardSize; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.cell = i;
        board.appendChild(cell);
    }
}

function init(){
    const gameBoard = document.querySelector('.game-board');
    gameBoard.addEventListener('click', (e)=>{
    console.log(parseInt(e.target.dataset.cell));
    });
    generateGameBoard(4, gameBoard);
}

init();