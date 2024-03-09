
const container = document.querySelector('.container');

function createGrid() {
    const gridSize = 16;

    const gridRow = 560/gridSize - 2;
    const gridCol = 560/gridSize ;

    for(let i=0 ; i < gridSize*gridSize; i++){
        const squares = document.createElement('div');
        squares.classList.add('squares');

        container.appendChild(squares);

        squares.style.width = gridRow +'px';
    }

    return document.querySelectorAll('.squares');
}

function changeColor() {
    const box = createGrid();
    box.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "green";
        });
    });
}

// createGrid();
changeColor();