import { Column } from "./column.js";

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column());
        }
    }

    getName() {
        return `${this.player1} vs ${this.player2}`;
    }

    playInColumn(columnIndex){
        this.columns[columnIndex].add(this.currentPlayer);

        if(this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex){
        return this.columns[columnIndex].isFull();
    }
}
