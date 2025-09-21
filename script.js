const container = document.querySelector("#grid-container");

const staticBtn = document.getElementById("staticMode");
const rainbowBtn = document.getElementById("rainbowMode");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clearSketch");
const toggleBtn = document.getElementById("toggleGrid");


let size = 16;
let isDrawing = false;
let action = "draw";

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

function draw(grid) {
    grid.style.backgroundColor = 'black'; 
}

function erase(grid){
    grid.style.backgroundColor = 'white';
}


createGrid();
const gridItems = document.querySelectorAll('.grid');

gridItems.forEach(grid =>{
    console.log(action);
    if(action === "draw"){
        grid.addEventListener("mousedown", () =>{
            isDrawing = true;
            draw(grid);
        });
        grid.addEventListener("mouseover", () =>{
            if(isDrawing)
            draw(grid);
        });
        grid.addEventListener("mouseup", () =>{
            isDrawing = false;
        });
    }
    else if(action === "erase"){
         grid.addEventListener("mousedown", () =>{
            isDrawing = true;
            erase(grid);
        });
        grid.addEventListener("mouseover", () =>{
            if(isDrawing)
            erase(grid);
        });
        grid.addEventListener("mouseup", () =>{
            isDrawing = false;
        });
    }
    
});


//////////////////////////////
clearBtn.onclick = () => clearSketch();
function clearSketch(){
    gridItems.forEach(grid =>{
        grid.style.backgroundColor = 'white';
    });
}


