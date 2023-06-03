export default class GamePlay {
  constructor(board, popUp, statisticShowingNum, statisticHittingNum) {
    this.board = board;
    this.popUp = popUp;
    this.statisticShowingNum = statisticShowingNum;
    this.statisticHittingNum = statisticHittingNum;
    this.boardCells = this.board.querySelectorAll('.board-item');
    this.boardSize = this.boardCells.length - 1;
    this.statistic = null;
    this.lastCell = null;
  }

  clear() {
    if (this.lastCell) {
      this.lastCell.classList.remove('goblin-active');
    }
  }

  rendering(index) {
    if (this.lastCell !== null) {
      this.lastCell.classList.remove('goblin-active');
    }

    this.boardCells[index].classList.add('goblin-active');
    this.lastCell = this.boardCells[index];
  }

  gameOver() {
    const element = document.createElement('span');
    element.textContent = 'Жаль, но Вы не справились. Попробуйте еще раз.';

    this.popUp.classList.remove('hidden');

    this.popUp.append(element);
  }

  playerWin() {
    const element = document.createElement('span');
    element.textContent = 'Вы победили. Молодец, так держать!!!';

    this.popUp.classList.remove('hidden');

    this.popUp.append(element);
  }
}
