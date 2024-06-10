const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".sizeBtn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

function generateRandomHex() {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomNumber()];
    }
    
    return hexColor;
};

function generateGrid() {

    for (let i = 0; i < 16; i++) {
        
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("grid");

        container.appendChild(outerDiv);

        for (let j = 0; j < 16; j++) {

            let innerDiv = document.createElement("div");
            innerDiv.classList.add("grid");

            innerDiv.addEventListener("mouseover", function() {
                innerDiv.style.backgroundColor = `${generateRandomHex()}`;
            })

            outerDiv.appendChild(innerDiv);
        }
    }
}

/*
sizeBtn.addEventListener("click", function() {
    let int = prompt ("Enter the grid size", "16")
    let gridSize = parseInt(int);

    return gridSize;
}) */

generateGrid();