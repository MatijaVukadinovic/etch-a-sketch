const container = document.querySelector(".container");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateGrid() {

    for (let i = 0; i < 16; i++) {
        
        let div = document.createElement("div");
        div.classList.add("grid");

        container.appendChild(div);

        for (let j = 0; j < 16; j++) {

            let div = document.createElement("div");
            div.classList.add("grid");

            container.appendChild(div);
        }
    }
}

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

generateGrid();