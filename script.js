const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".sizeBtn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let gridSize = 16; 

sizeBtn.addEventListener("click", function() {
    let int = prompt("Enter the grid size", "16");
    gridSize = parseInt(int);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 64) {
        alert("Please enter a valid positive number for the grid size.");
        return;
    }

    generateGrid();
});

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

    container.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("grid");

        container.appendChild(outerDiv);

        for (let j = 0; j < gridSize; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.classList.add("grid");

            innerDiv.addEventListener("mouseover", function() {
                innerDiv.style.backgroundColor = `${generateRandomHex()}`;
            });

            outerDiv.appendChild(innerDiv);
        }
    }
}

generateGrid();