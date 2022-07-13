const grid = document.querySelector('#grid');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.style.padding = '10px';
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = 'DeepSkyBlue';
        })
        grid.appendChild(square);
    }
}