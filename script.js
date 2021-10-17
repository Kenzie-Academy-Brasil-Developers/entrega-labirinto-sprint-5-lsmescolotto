const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const game = document.querySelector(".game");
const startSection = document.querySelector(".startSection");
const startButton = document.getElementById("startButton");
const body = document.querySelector("body");

let currentRow = 9;
let currentColumn = 0;
const player = map[currentRow][currentColumn];

let boxTop = 275;
let boxLeft = 5;


function removeStartMsg() {
    startSection.classList.add("displayNone");
}

function addImgBackgorundToBody() {
    body.classList.add("backgroundImg")
}

function createFixedDivs() {
    removeStartMsg();
    addImgBackgorundToBody()
    let mapSplit = [];

    for (let i=0; i<map.length; i++){
        mapSplit.push( map[i].split(""))
    
        const divRows = document.createElement("div");
        divRows.classList.add("divRows");
        game.appendChild(divRows);

        for (let j=0; j<mapSplit[i].length; j++){
        const divCell = document.createElement("div");
        divRows.appendChild(divCell);

            if (mapSplit[i][j] === "W"){
                divCell.classList.add("divWalls");
            }
            else if (mapSplit[i][j] === " "){
                divCell.classList.add("divHall");
            }
            else if (mapSplit[i][j] === "S"){
                const div = document.createElement("div");
                div.innerText= "8";
                div.classList.add("player");
                divCell.classList.add("start");
                divCell.innerText = "Start";
                divCell.appendChild(div);
            }
            else {
                divCell.classList.add("finish");
                divCell.innerText = "Finish";
            }
        }
    }
}

startButton.addEventListener("click", createFixedDivs);

function reset() {
    game.innerHTML = '';
    body.classList.remove("backgroundImg");
    startSection.classList.remove("displayNone");
}

function winMessage() {
    const divWin = document.createElement("div");
    const pWin = document.createElement("p");
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    pWin.innerText = "Congratulations! You won Labyrinth8!";
    divWin.appendChild(pWin);
    divWin.appendChild(resetButton);
    divWin.classList.add("win");
    game.appendChild(divWin);
    resetButton.addEventListener("click", reset);
}

document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    console.log (keyName)
    if(keyName === "ArrowDown") {
        console.log(currentRow);
        console.log(currentColumn);
        if (map[currentRow+1][currentColumn] === " "){
            boxTop +=30;
            currentRow++;
            console.log(currentRow)
        }
    }
    else if(keyName === "ArrowLeft") {
        console.log(currentRow);
        console.log(currentColumn);
        if (map[currentRow][currentColumn-1] === " " || map[currentRow][currentColumn-1] === "S"){
            boxLeft -=30;
            currentColumn--;
            console.log(currentColumn)
        }
    }
    else if(keyName === "ArrowUp") {
        console.log(currentRow);
        console.log(currentColumn);
        if (map[currentRow-1][currentColumn] === " "){
            boxTop -=30;
            currentRow--;
            console.log(currentRow)
        }
    }
    else if (keyName === "ArrowRight") {
        console.log(currentRow);
        console.log(currentColumn);
        if (map[currentRow][currentColumn+1] === " "){
            boxLeft +=30;
            currentColumn++;
            console.log(currentColumn)
        }
        if (map[currentRow][currentColumn+1] === "F"){
            boxLeft +=30;
            currentColumn++;
            winMessage();
        }
        
    }
    document.querySelector(".player").style.top = `${boxTop}px`;
    document.querySelector(".player").style.left = `${boxLeft}px`;
});

