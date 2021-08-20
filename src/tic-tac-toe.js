class TicTacToe {
  constructor() {
    this.arr = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.equal = "x";
    this.winer = null;
  }

  getCurrentPlayerSymbol() {
    return this.equal;
  }

  nextTurn(rowIndex, columnIndex) {
    if (rowIndex >= 0 && rowIndex < 3 && columnIndex >= 0 && columnIndex < 3) {
      if (this.arr[rowIndex][columnIndex] === null) {
        this.arr[rowIndex].splice(columnIndex, 1, this.equal);
        if (this.equal === "x") {
          this.equal = "o";
        } else {
          this.equal = "x";
        }
      }
    }
  }

  isFinished() {}

  getWinner() {}

  noMoreTurns() {
    for (let value of this.arr) {
      if (value.includes(null, 0)) {
        return false;
      }
    }
    return true;
  }

  isDraw() {}

  getFieldValue(rowIndex, colIndex) {
    return this.arr[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
