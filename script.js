function createGrid(num) {
    const grid = document.querySelector('#grid');
    grid.replaceChildren();
    let squareDimension = getComputedStyle(grid).maxWidth.slice(0, -2)/num;
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareDimension}px`;
        square.style.height = `${squareDimension}px`;
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = 'DeepSkyBlue';
        });
        grid.appendChild(square);
    }
}

const dimensionButton = document.querySelector("#dimension");
dimensionButton.addEventListener('click', () => {
    let input = prompt("How many squares per side? (max 100)");
    while ((input > 100 || input < 1 || isNaN(input)) && input !== null) {
        alert("Please enter a number between 1 and 100.");
        input = prompt("How many squares per side? (max 100)");
    }
    createGrid(input);
});

createGrid(10);