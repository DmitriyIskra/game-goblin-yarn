export default class Statistic {
  constructor() {
    this.showedTotal = 0;
    this.hittingTarget = 0;
  }

  addTotalShowed() {
    this.showedTotal += 1;
  }

  addHittingTarget() {
    this.hittingTarget += 1;
  }

  cleanShowedTotal() {
    this.showedTotal = 0;
  }

  cleanHittingTarget() {
    this.HittingTarget = 0;
  }
}
