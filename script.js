const container = document.querySelector("#grid-container");
const staticBtn = document.getElementById("staticMode");
const rainbowBtn = document.getElementById("rainbowMode");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clearSketch");
const toggleBtn = document.getElementById("toggleGrid");

const rangeInput = document.querySelector("#gridSize");
const rangeLabel = document.querySelector(".range-label");

let size = rangeInput.value; 
let isDrawing = false;
let action = "draw";
let currentColor = "black";

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
    attachListener();
}

function draw(grid){
    if(currentColor === "rainbowMode")
        grid.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    else
    grid.style.backgroundColor = currentColor; 
}


function erase(grid){
    grid.style.backgroundColor = 'white';
}

function attachListener(){
    const gridItems = document.querySelectorAll(".grid"); // Get fresh grid items
    gridItems.forEach((grid) => {
        grid.removeEventListener("mousedown", handleMouseDown);
        grid.removeEventListener("mouseover", handleMouseOver);
        grid.removeEventListener("mouseup", handleMouseUp);

        grid.addEventListener("mousedown", handleMouseDown);
        grid.addEventListener("mouseover", handleMouseOver);
        grid.addEventListener("mouseup", handleMouseUp);
    });
}

function handleMouseDown(e) {
    isDrawing = true;
    if (action === "draw") {
        draw(e.target);
    } else if (action === "erase") {
        erase(e.target);
    }
}

function handleMouseOver(e) {
    if (isDrawing) {
        if (action === "draw") {
            draw(e.target);
        } else if (action === "erase") {
            erase(e.target);
        }
    }
}

function handleMouseUp() {
    isDrawing = false;
}

function  clearSketch(){
    const gridItems = document.querySelectorAll(".grid");
    gridItems.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
}


clearBtn.addEventListener("click", () => {
    clearSketch();
});
eraserBtn.addEventListener("click", () =>{
    action = "erase";
    attachListener();
});
staticBtn.addEventListener("click", () =>{
    action = "draw";
    currentColor = "black";
    attachListener();
});
rainbowBtn.addEventListener("click", () =>{
    action = "draw";
    currentColor = "rainbowMode";
    attachListener();
});
toggleBtn.addEventListener("click", () => {
    const gridItems = document.querySelectorAll(".grid");
    gridItems.forEach((grid) => {
        grid.classList.toggle("no-border");
    });
});
rangeInput.addEventListener("input", () => {
    size = rangeInput.value;
    rangeLabel.textContent = `Grid Size: ${size}x${size}`;
    createGrid();
});




///////////////
rangeLabel.textContent = `Grid Size: ${size}x${size}`;
createGrid();

