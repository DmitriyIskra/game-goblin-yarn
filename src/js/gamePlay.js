import GenerateRandom from './randomNum';

export default class Game {
  constructor(board) {
    this.board = board;
    this.boardCells = this.board.querySelectorAll('.board-item');
    this.boardSize = this.boardCells.length - 1;
    this.lastCell = null;
    this.generateRandom = null;
  }

  init() {
    this.generateRandom = new GenerateRandom(this.boardSize);
    this.rendering();
  }

  rendering() {
    (async () => {
      const index = await this.generateRandom.randomNum();

      if (this.lastCell !== null) {
        this.lastCell.classList.remove('goblin-active');
      }

      this.boardCells[index].classList.add('goblin-active');
      this.lastCell = this.boardCells[index];

      setTimeout(() => this.rendering(), 500);
    })();
  }
}
