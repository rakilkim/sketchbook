let dimension = 16;
let new_dimension = "";
const BOARD_SIDE = 640;
let rgb = "#000000";

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

let coloring = false;
function reset() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener('mousedown', (e) => {
            coloring = true;
            grid.style.background = rgb;
            e.preventDefault();
        });
        grid.addEventListener('mousemove', () => {
            if (coloring) {
                grid.style.background = rgb;
            }
        });
        grid.addEventListener('mouseup', () => {
            coloring = false;
        });
    });
}
window.addEventListener('mousemove', function(event){
    if (event.target.classList.value !== 'grid') {
        coloring = false;
    }
});


const dimensions = document.getElementById("dimensions");
dimensions.addEventListener('keyup', function(e)  {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("generate").click();
    }
});

const generate = document.getElementById("generate");
generate.addEventListener('click', () => {
    new_dimension = dimensions.value;
    if (parseInt(new_dimension) > 1 && parseInt(new_dimension) < 101) {
        document.getElementById('container').innerHTML = "";
        createBoard(new_dimension);
        reset();
    }
    dimensions.value = "";
    new_dimension = "";
});
generate.addEventListener('mouseover', () => {
    generate.style.cursor = "pointer";
})

const color = document.getElementById("color");
color.addEventListener('input', () => {
    console.log(color.value);
    rgb = color.value;
})