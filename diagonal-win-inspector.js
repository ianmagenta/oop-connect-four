export class DiagonalWinInspector {
    constructor(columns) {
        this.columns = columns;
    }

    inspect() {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
            for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
                if (this.columns[columnIndex].getTokenAt(rowIndex) === this.columns[columnIndex + 1].getTokenAt(rowIndex + 1)
                && this.columns[columnIndex + 1].getTokenAt(rowIndex + 1) === this.columns[columnIndex + 2].getTokenAt(rowIndex + 2)
                && this.columns[columnIndex + 2].getTokenAt(rowIndex + 2) === this.columns[columnIndex + 3].getTokenAt(rowIndex + 3)
                && this.columns[columnIndex].getTokenAt(rowIndex) !== null) {
                    return this.columns[columnIndex].getTokenAt(rowIndex);
                }
                else if (this.columns[columnIndex].getTokenAt(rowIndex + 3) === this.columns[columnIndex + 1].getTokenAt(rowIndex + 2)
                && this.columns[columnIndex + 1].getTokenAt(rowIndex + 2) === this.columns[columnIndex + 2].getTokenAt(rowIndex + 1)
                && this.columns[columnIndex + 2].getTokenAt(rowIndex + 1) === this.columns[columnIndex + 3].getTokenAt(rowIndex)
                && this.columns[columnIndex + 3].getTokenAt(rowIndex) !== null) {
                    return this.columns[columnIndex + 3].getTokenAt(rowIndex);
                }
            }
        }
        return 0;
    }
}
