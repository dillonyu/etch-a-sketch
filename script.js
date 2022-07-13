function createGrid(num) {
    const grid = document.querySelector('#grid');
    let squareDimension = getComputedStyle(grid).maxWidth.slice(0, -2)/num;
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareDimension}px`;
        square.style.height = `${squareDimension}px`;
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = 'DeepSkyBlue';
        })
        grid.appendChild(square);
    }
}

createGrid(10);