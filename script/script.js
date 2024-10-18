const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear");
const rgbBtn = document.querySelector('#rgb');
const gridBtn = document.querySelector('#show-grid');
const eraserBtn = document.querySelector('#eraser');
const squareQuantity = document.querySelector('#square-numbers');

let number = 16;

let isGridVisible = false;
let isRgbVisible = false;
let isEraserActive = false;

resetGrid();
startGrid();

gridBtn.addEventListener('click', () => {
    isGridVisible = !isGridVisible;
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {

        if (isGridVisible) {
            square.style.border = '0.02px solid gray';
        } else {
            square.style.border = 'none';
        }
    });
});

clearBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.style.backgroundColor = 'rgb(64, 65, 65)';
    });

    resetGrid();
    startGrid();
});

function resetGrid() {
    container.innerHTML = '';
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyHoverEffect(square) {
    square.addEventListener('mouseover', () => {

        if (isEraserActive) {
            square.style.backgroundColor = 'rgb(64, 65, 65)';
            square.style.opacity = '1';
        } else if (isRgbVisible) {
            square.style.backgroundColor = randomColor();
        } else {
            square.style.backgroundColor = 'aliceblue';
        }

    });
}

rgbBtn.addEventListener('click', () => {
    isRgbVisible = !isRgbVisible;
});

eraserBtn.addEventListener('click', () => {
    isEraserActive = !isEraserActive;
});

function startGrid() {
    const squareSize = 320 / number;

    for (let i = 0; i < number * number; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = 'rgb(64, 65, 65)';
        container.appendChild(square);
        applyHoverEffect(square);
    }
}

squareQuantity.addEventListener('click', () => {
    let newNumber = Number(prompt("How many squares per side of the grid do you want?", ""));

    if (isNaN(newNumber) || newNumber <= 0 || newNumber > 100) {
        alert("Invalid. Choose a number between 1 and 100.");
        return;
    } else {
        number = newNumber;
    }

    resetGrid();
    startGrid();
});