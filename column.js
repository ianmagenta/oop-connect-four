export class Column {
    constructor() {
        this.tokensArray = [];
    }

    add(playerNum) {
        if(!this.isFull()){
            this.tokensArray.push(playerNum);
        }
    }

    getTokenAt(rowIndexNum) {
        if (this.tokensArray[5 - rowIndexNum] === 1) {
            return 1;
        } else if (this.tokensArray[5 - rowIndexNum] === 2) {
            return 2;
        } else {
            return null;
        }
    }

    isFull(){
        if(this.tokensArray.length < 6){
            return false;
        } else {
            return true;
        }
    }
}
