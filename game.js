import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";
import { RowWinInspector } from "./row-win-inspector.js";
import { DiagonalWinInspector} from "./diagonal-win-inspector.js";

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        this.winnerNumber = 0;
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            this.columns.push(new Column());
        }
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with ${this.player2}`;
        } else if(this.winnerNumber === 1){
            return `${this.player1} wins!`;
        } else if (this.winnerNumber === 2) {
            return `${this.player2} wins!`;
        }
        return `${this.player1} vs ${this.player2}`;
    }

    playInColumn(columnIndex){
        this.columns[columnIndex].add(this.currentPlayer);

        if(this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex){
        if(this.winnerNumber === 1 || this.winnerNumber === 2){
            return true;
        }
        return this.columns[columnIndex].isFull();
    }

    checkForTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin(){
        if(this.winnerNumber !== 0){
            return;
        }
        this.columns.forEach(column =>{
            let columnInspector = new ColumnWinInspector(column);
            let inspection = columnInspector.inspect();
            if(inspection !== 0){
                this.winnerNumber = inspection;
            }
        });
    }

    checkForRowWin() {
        if (this.winnerNumber !== 0) {
            return;
        }
        let rowInspector = new RowWinInspector(this.columns);
        let inspection = rowInspector.inspect();
        if (inspection !== 0) {
            this.winnerNumber = inspection;
        }
    }

    checkForDiagonalWin() {
        if (this.winnerNumber !== 0) {
            return;
        }
        let rowInspector = new DiagonalWinInspector(this.columns);
        let inspection = rowInspector.inspect();
        if (inspection !== 0) {
            this.winnerNumber = inspection;
        }
    }
}
