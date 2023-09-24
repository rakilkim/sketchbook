let dimension = 16;
let new_dimension = "";
const BOARD_SIDE = 640;
let r = 0;
let g = 0;
let b = 0;

let container = document.querySelector('#container');

function createBoard(dimension) {
    size = BOARD_SIDE/dimension
    dimension = parseInt(dimension);
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < dimension; i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = size + 'px';
            grid.style.height = size + 'px';
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}
createBoard(dimension);
reset();

function reset() {
    const grids = document.querySelectorAll(".grid");
    let coloring = false;
    grids.forEach((grid) => {
        grid.addEventListener('mousedown', (e) => {
            coloring = true;
            grid.style.background = "rgb("+r+","+g+","+b+")";
            e.preventDefault();
        });
        grid.addEventListener('mousemove', () => {
            if (coloring) {
                grid.style.background = "rgb("+r+","+g+","+b+")";
            }
        });
        grid.addEventListener('mouseup', () => {
            coloring = false;
        });
    });
}


const dimensions = document.getElementById("dimensions");
dimensions.addEventListener('keyup', function(e)  {
    console.log(e)
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("generate").click();
    }
    else if (isFinite(e.key)) {
        new_dimension += e.key;
    }
});

const generate = document.getElementById("generate");
generate.addEventListener('click', () => {
    if (parseInt(new_dimension) > 1 && parseInt(new_dimension) < 101) {
        document.getElementById('container').innerHTML = "";
        createBoard(new_dimension);
        reset();
    }
    dimensions.value = "";
    new_dimension = "";
});
