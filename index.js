const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < 16; i++) {
        const grid = document.createElement('div');
        grid.textContent = '.'
        grid.classList.add('grid');
        row.appendChild(grid);
    }
    container.appendChild(row);
}
