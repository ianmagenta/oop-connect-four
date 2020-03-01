import { Game } from "./game.js";
import { GameJsonSerializer } from "./game-json-serializer.js";
import { GameJsonDeserializer } from "./game-json-deserializer.js";

let game = undefined;

function updateUi(boardHolder, gameName, clickTargets) {
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }
    const currentPlayer = game.currentPlayer;
    if(currentPlayer === 1){
        clickTargets.classList.add("black");
        clickTargets.classList.remove("red");
    } else {
        clickTargets.classList.add("red");
        clickTargets.classList.remove("black");
    }

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            let squares = document.getElementById(`square-${rowIndex}-${columnIndex}`);
            let result = game.getTokenAt(rowIndex, columnIndex);
            squares.innerHTML = "";
            if (result === 1) {
                const div = document.createElement("div");
                div.classList.add("token");
                div.classList.add("black");
                squares.appendChild(div);
            } else if (result === 2) {
                const div = document.createElement("div");
                div.classList.add("token");
                div.classList.add("red");
                squares.appendChild(div);
            }
        }
    }

    for(let columnIndex = 0; columnIndex <= 6; columnIndex++){
        const column = document.getElementById(`column-${columnIndex}`);
        if (game.isColumnFull(columnIndex)){
            column.classList.add("full");
        } else {
            column.classList.remove("full");
        }


    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    const p1Name = document.getElementById("player-1-name");
    const p2Name = document.getElementById("player-2-name");
    const form = document.getElementById("form-holder");
    const newGame = document.getElementById("new-game");
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    const clickTargets = document.getElementById("click-targets");

    form.addEventListener("input", (e) => {
        if (p1Name.value && p2Name.value) {
            newGame.disabled = false;
        }
    });

    newGame.addEventListener("click", (e) => {
        game = new Game(p1Name.value, p2Name.value);
        p1Name.value = "";
        p2Name.value = "";
        newGame.disabled = true;
        updateUi(boardHolder, gameName, clickTargets);
    });

    clickTargets.addEventListener("click", (e)=>{
        if (!e.target.classList.contains("full")) {
            if (e.target.id.includes("column-")) {
                let targetIdNum = e.target.id[e.target.id.length - 1];
                let targetNum = Number.parseInt(targetIdNum);
                game.playInColumn(targetNum);
            }
            updateUi(boardHolder, gameName, clickTargets);
            new GameJsonSerializer(game).serialize();
        }
    });
    let storage = localStorage.getItem("connect-four-state");
    game = new GameJsonDeserializer(storage).deserialize();
    updateUi(boardHolder, gameName, clickTargets);
});
