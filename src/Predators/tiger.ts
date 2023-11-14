import {BasePredator, PredatorIcon, PredatorName} from './predators';

export class Tiger extends BasePredator {
  name = PredatorName.Tiger;
  icon = PredatorIcon.Tiger;
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
      x: 2,
      y: 2,
    };
  }
}
