let gridSize = 5;
const container = document.querySelector(".container");

//function to create 16x16 grid
function createGrid (numOf) {
    //creating row
    for (let i = 0; i < numOf; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        //inner loop. This loop must finish before going back to outer loop
        //creating each box in row
        for (let j = 0; j < numOf; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            //put box in row
            row.appendChild(gridBox);
        }

        //out of outer loop
        //append row to container
        container.appendChild(row);
    }
}


createGrid(gridSize);