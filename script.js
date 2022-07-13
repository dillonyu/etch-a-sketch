const grid = document.querySelector('#grid');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.style.padding = '10px';
        square.style.border = '1px solid black';
        grid.appendChild(square);
    }
}