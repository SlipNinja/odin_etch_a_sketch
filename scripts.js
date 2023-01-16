const BASE_SIZE = 16;
const body = document.querySelector('body');

function addChoiceButton() {
    let newButton = document.createElement('button');
    newButton.textContent = 'Generate Grid';
    newButton.id = 'button';
    newButton.addEventListener('click', regenerateGrid);
    body.appendChild(newButton);
}

function regenerateGrid() {

    let newSize = +prompt('Type the new grid size', "16");

    while(body.lastElementChild.id != 'button'){
        body.removeChild(body.lastElementChild);
    }

    generateGrid(newSize);
}

function generateGrid(columns=BASE_SIZE) {
    for(let column = 0; column < columns; column++){
        generateRow(columns);
    }
}

function generateRow(rows) {

    let newRow = document.createElement('div');
    newRow.classList.add('row');
    body.appendChild(newRow);

    for(let row = 0; row < rows; row++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.dataset['mouseoverTimes'] = "1";
        newSquare.addEventListener('mouseover', colorSquare);
        newRow.appendChild(newSquare);
    }
}

function colorSquare(e) {

    e.target.style['background-color'] = 'black';

    setTimeout(() => {
        let mouseroverTimes = +e.target.dataset['mouseoverTimes'];
        let cPercent = 100 - mouseroverTimes*25;
        
        if(cPercent < 0){cPercent = 0;}

        let newColor = `rgb(${cPercent}%, ${cPercent}%, ${cPercent}%)`
        console.log(newColor);

        e.target.style['background-color'] = newColor;
        e.target.dataset['mouseoverTimes'] = mouseroverTimes + 1;
    }, 100);
}

addChoiceButton();
generateGrid();