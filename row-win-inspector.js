export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }

    inspect() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.columns[j].getTokenAt(i) === this.columns[j + 1].getTokenAt(i)
                && this.columns[j + 1].getTokenAt(i) === this.columns[j + 2].getTokenAt(i)
                && this.columns[j + 2].getTokenAt(i) === this.columns[j + 3].getTokenAt(i)
                && this.columns[j].getTokenAt(i) !== null) {
                    return this.columns[j].getTokenAt(i);
                }
            }
        }
        return 0;
    }
}
