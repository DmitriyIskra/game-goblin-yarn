export default class GameController {
  constructor(gamePlay, generatorRandom, statistic, cursor) {
    this.gamePlay = gamePlay;
    this.statistic = statistic;
    this.generatorRandom = generatorRandom;
    this.cursor = cursor;
    this.counterShowing = 0;
    this.lastCellActive = null;
  }

  init() {
    this.generatorRandom.size = this.gamePlay.boardSize;

    // this.gamePlay.board.addEventListener('click', this.onClick.bind(this));
    this.gamePlay.board.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.gamePlay.board.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.cursor.cursor.addEventListener('mouseup', this.onMouseUp.bind(this));

    this.cursor.cursor.style.display = 'none';

    this.start(); 
  }

  start() {
    if (this.statistic.showedTotal === 5) {
      // при пяти пропусках игрок проиграл
      this.gamePlay.gameOver();

      return;
    } if (this.statistic.hittingTarget === 5) {
      // при пяти попаданиях игрок победил
      this.gamePlay.playerWin();
      return;
    }

    (async () => {
      // получаем рандомную ячейку
      const index = await this.generatorRandom.randomNum();
      // Отрисовка
      this.gamePlay.rendering(index);
      // добавляем количество показов
      this.statistic.showedTotal += 1;
      // Отображение количества показов
      this.gamePlay.statisticShowingNum.textContent = `${this.statistic.showedTotal}`;

      setTimeout(() => this.start(), 1000);
    })();
  }

  onMouseDown(e) {
    if (e.target.matches('.goblin-active')
     && this.statistic.hittingTarget < 5
      && this.statistic.showedTotal < 5) {
      // обнуляем количество показов при попадании
      this.statistic.showedTotal = 0;
      // Добавляет очки если есть попадание
      this.statistic.addHittingTarget();
      // отображение количества попаданий
      this.gamePlay.statisticHittingNum.textContent = `${this.statistic.hittingTarget}`;
      // Отображение количества показов
      this.gamePlay.statisticShowingNum.textContent = `${this.statistic.showedTotal}`;

      e.target.style.cursor = 'none';

      this.lastCellActive = e.target;

      this.cursor.changeCursor(e.clientY, e.clientX); // позиционируем блок с крсором по точке клика

      this.gamePlay.clear();
    }
  }

  onMouseUp() {
    this.cursor.cursorHidden();

    if (this.lastCellActive) { // если не пусто, значит было попадание и курсор кастомизировался
      this.lastCellActive.style.cursor = 'default'; // Возвращаем стандартный курсор при поднятии клавиши после попадания
      this.lastCellActive = null;
    }
  }
}
