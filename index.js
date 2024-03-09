
const container = document.querySelector('.container');

function createGrid(gridSize) {

    const gridRow = 560/gridSize - 2;

    // Clear existing grid
    container.innerHTML = '';

    for(let i=0 ; i < gridSize*gridSize; i++){
        const squares = document.createElement('div');
        squares.classList.add('squares');

        container.appendChild(squares);

        squares.style.width = gridRow +'px';
    }

    return document.querySelectorAll('.squares');
}

function changeColor(box) {
    box.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            // Generate random color
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)

            square.style.backgroundColor = randomColor;
        });

        // Touch event for mobile devices
        square.addEventListener("touchstart", (event) => {
            event.preventDefault(); // Prevent default touch behavior
            changeSquareColor(square);
        });
    });
}

// Initial grid size
const defaultGridSize = 16;

// Create grid with default size when the page loads
const defaultBox = createGrid(defaultGridSize);
changeColor(defaultBox);

const buttons = document.querySelector('button');

buttons.addEventListener('click', () => {
    const gridSize = prompt("Please enter a grid size (1-100)");

    const box = createGrid(gridSize);

    changeColor(box)
});
