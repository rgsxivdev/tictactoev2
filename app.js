

function generateGameboard(){
const grid = document.querySelector('.grid');    
let html = '';

for (let i = 0; i < 9; i++){
html += `<div class= 'cell' data-cell='${i}'> </div>`
};
grid.innerHTML = html;
}

generateGameboard();
