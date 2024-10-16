const container = document.querySelector("#container");

let number = 16;

resetGrid();
startGrid();

function resetGrid() {
    container.innerHTML = '';
    container.style.width = `${number * 20}px`;
    container.style.height = `${number * 20}px`;
};

function startGrid() {

    let gridSize = number * number;
    const squareSize = 100 / number;

    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flexBasis = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'aliceblue';
            square.style.opacity = '1';
        });
        square.addEventListener('mouseout', () => {
            square.style.opacity = '0.8';
        });
        console.count("");
    };
    console.log(number);
};

const squareQuantity = document.querySelector('#square-numbers');

squareQuantity.addEventListener('click', () => {
    newNumber = Number(prompt("How many squares per side of the grid you want?", ""));
    if (isNaN(newNumber) || newNumber <= 0 || newNumber > 100) {
        alert("Invalid. Choose a number between 1 and 100.");
        return;
    } 
    else {
        number = newNumber;
    }
    resetGrid();
    startGrid();
});





