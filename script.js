const container = document.querySelector(".container");

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

generateGrid();