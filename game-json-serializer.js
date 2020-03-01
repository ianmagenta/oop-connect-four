export class GameJsonSerializer {
    constructor(gameObj) {
        this.gameObj = gameObj;
    }

    serialize() {
        let player1 = this.gameObj.player1;
        let player2 = this.gameObj.player2;
        let currentPlayer = this.gameObj.currentPlayer;
        let winNum = this.gameObj.winnerNumber;
        let jSonArr = [player1, player2, winNum, currentPlayer];
        this.gameObj.columns.forEach((column, index) => {
            let columnArr = [];
            for(let i = 5; i > 0; i--){
                let collumnValue = this.gameObj.getTokenAt(i, index);
                if (collumnValue !== null) {
                    columnArr.push(collumnValue);
                }
            }
            jSonArr.push(columnArr);
        })
        let stateVal = JSON.stringify(jSonArr);
        localStorage.setItem("connect-four-state", stateVal);
    }
}
