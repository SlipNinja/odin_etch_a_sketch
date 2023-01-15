const ROWS = 16;
const COLUMNS = 16;
const body = document.querySelector('body');

//const squares = [];

function addChoiceButton() {
    let newButton = document.createElement('button');
    newButton.textContent = 'Generate Grid';
    body.appendChild(newButton);
}

function generateGrid() {
    for(let column = 0; column < COLUMNS; column++){
        generateRow();
    }
}

function generateRow() {

    let newRow = document.createElement('div');
    newRow.classList.add('row');
    body.appendChild(newRow);

    for(let row = 0; row < ROWS; row++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.addEventListener('mouseover', colorSquare);
        newRow.appendChild(newSquare);
        //squares.push(newSquare);

    }
}

function colorSquare(e) {
    e.srcElement.style['background-color'] = 'black';
}

addChoiceButton();
generateGrid();