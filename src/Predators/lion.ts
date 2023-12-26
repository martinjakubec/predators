import {BasePredator, PredatorIcon, PredatorName} from './predators';

export class Lion extends BasePredator {
  name = PredatorName.Lion;
  icon = PredatorIcon.Lion;
  position = {
    x: 0,
    y: 0,
  };

  constructor(x: number, y: number) {
    super();
    this.position = {
      x,
      y,
    };
  }

  attackMove() {
    return {
      x: 1,
      y: 1,
    };
  }

  turn(): void {
    console.log('Lion turn', this.uuid);
  }
}
