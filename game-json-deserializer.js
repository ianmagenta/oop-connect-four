import { Game } from "./game.js"

export class GameJsonDeserializer {
    constructor(jSonString){
        this.jSonString = jSonString;
    }


    deserialize() {
        let values = JSON.parse(this.jSonString);
        let gameObj = new Game(values[0],values[1]);
        gameObj.winnerNumber = values[2];
        let columnArrays = values.slice(4);
        columnArrays.forEach((column, i) => {
            column.forEach(rowValue =>{
                gameObj.currentPlayer = rowValue;
                gameObj.playInColumn(i)
            });
        })
        gameObj.currentPlayer = values[3];
        return gameObj;
    }
}
