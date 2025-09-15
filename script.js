function createGrid(){
    const container = document.querySelector("#container");
    for(let i = 0;i<16;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0;j<16;j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

createGrid();