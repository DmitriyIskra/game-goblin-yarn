// TODO: write code here
import GameController from './GameController';
import GamePlay from './GamePlay';
import GenerateRandom from './randomNum';
import Statistic from './Statistic';

const board = document.querySelector('.wr-board');
const popUp = document.querySelector('.pop-up');
const statisticShowingNum = document.querySelector('.statistic__showing-num');
const statisticHittingNum = document.querySelector('.statistic__hitting-num');

const gamecontroller = new GameController(
  new GamePlay(board, popUp, statisticShowingNum, statisticHittingNum),
  new GenerateRandom(),
  new Statistic(),
);

gamecontroller.init();
