export default class GameController {
  constructor(gamePlay, generatorRandom, statistic) {
    this.gamePlay = gamePlay;
    this.statistic = statistic;
    this.generatorRandom = generatorRandom;
    this.counterShowing = 0;
  }

  init() {
    this.generatorRandom.size = this.gamePlay.boardSize;

    this.gamePlay.board.addEventListener('click', this.onClick.bind(this));

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

  onClick(e) {
    if (e.target.matches('.goblin-active') && this.statistic.hittingTarget < 5) {
      // обнуляем количество показов при попадании
      this.statistic.showedTotal = 0;
      // Добавляет очки если есть попадание
      this.statistic.addHittingTarget();
      // отображение количества попаданий
      this.gamePlay.statisticHittingNum.textContent = `${this.statistic.hittingTarget}`;
      // Отображение количества показов
      this.gamePlay.statisticShowingNum.textContent = `${this.statistic.showedTotal}`;

    }
  }
}
