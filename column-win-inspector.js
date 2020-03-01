export class ColumnWinInspector {
    constructor(column){
        this.column = column;
    };

    inspect(){
        for(let columnIndex = 0; columnIndex < 3; columnIndex++){
            if(this.column.getTokenAt(columnIndex) === this.column.getTokenAt(columnIndex+1)
            && this.column.getTokenAt(columnIndex+1) === this.column.getTokenAt(columnIndex+2)
            && this.column.getTokenAt(columnIndex+2) === this.column.getTokenAt(columnIndex+3)
            && this.column.getTokenAt(columnIndex) !== null){
                return this.column.getTokenAt(columnIndex);
            }
        }
        return 0;
    }
}
