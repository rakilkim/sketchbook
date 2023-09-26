let dimension = 16;
let new_dimension = "";
const BOARD_SIDE = 640;
let rgb = "#000000";


//Creating board
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


//Resetting event listener after generating new board
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

//Prevents coloring when mouse not clicked
window.addEventListener('mousemove', function(event){
    if (event.target.classList.value !== 'grid') {
        coloring = false;
    }
});


//Generating new board
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


//Color
const color = document.getElementById("color");
color.addEventListener('input', () => {
    rgb = color.value;
    color.style.borderColor = color.value;
    if (erasing) {
        prevColor = rgb;
        document.getElementById('eraser').click();
    }
})
color.addEventListener('mouseover', () => {
    color.style.cursor = "pointer";
})


//Eraser
let erasing = false;
let prevColor;
const eraser = document.getElementById("eraser");
eraser.addEventListener('click', () => {
    if (erasing) {
        eraser.style.backgroundColor = "white";
        eraser.style.color = "black";
        rgb = prevColor;
        erasing = false;
    }
    else {
        prevColor = rgb;
        rgb = '#f8f8ff';
        eraser.style.backgroundColor = "gray";
        erasing = true;
    }
})
eraser.addEventListener('mouseover', () => {
    eraser.style.cursor = "pointer";
})


const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    console.log(clear);
    let grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'ghostwhite'
    });
})