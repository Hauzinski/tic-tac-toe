class TicTacToe {
  constructor() {
    this.arr = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.equal = "x";
    this.winner = null;
    this.gameOver = false;
  }

  getCurrentPlayerSymbol() {
    return this.equal;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.gameOver) {
      if (this.arr[rowIndex][columnIndex] === null) {
        this.arr[rowIndex].splice(columnIndex, 1, this.equal);

        if (this.arr[0][0] === this.arr[1][1] && this.arr[1][1] === this.arr[2][2] && !!this.arr[0][0] && !!this.arr[1][1] && !!this.arr[2][2]) {
          this.gameOver = true;
          this.winner = this.equal;
        }

        if (this.arr[0][2] === this.arr[1][1] && this.arr[1][1] === this.arr[2][0] && !!this.arr[0][2] && !!this.arr[1][1] && !!this.arr[2][0]) {
          this.gameOver = true;
          this.winner = this.equal;
        }

        for (let i = 0; i < 3; i++) {
          if (this.arr[i][0] === this.arr[i][1] && this.arr[i][1] === this.arr[i][2] && !!this.arr[i][0] && !!this.arr[i][1] && !!this.arr[i][2]) {
            this.gameOver = true;
            this.winner = this.equal;
          }
        }

        for (let i = 0; i < 3; i++) {
          if (this.arr[0][i] === this.arr[1][i] && this.arr[1][i] === this.arr[2][i] && !!this.arr[0][i] && !!this.arr[1][i] && !!this.arr[2][i]) {
            this.gameOver = true;
            this.winner = this.equal;
          }
        }

        if (this.equal === "x") {
          this.equal = "o";
        } else {
          this.equal = "x";
        }
      }
    }
  }

  isFinished() {
    return this.winner !== null || this.arr.flat().includes(null, 0) === false;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.arr.flat().includes(null, 0) ? false : true;
  }

  isDraw() {
    return this.winner === null && this.arr.flat().includes(null, 0) === false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.arr[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
