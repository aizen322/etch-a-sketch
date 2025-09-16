const container = document.querySelector("#grid-container");

let size = 16;

function createGrid(){
    container.innerHTML = '';
    for(let i = 0;i<size;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0;j<size;j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
            grid.style.backgroundColor = "white";
        }
        container.appendChild(row);
    }
}

createGrid();

const gridItems = document.querySelectorAll('.grid');