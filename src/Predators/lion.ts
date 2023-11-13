import {BasePredator} from './predators';

export class Lion extends BasePredator {
  name = 'Lion';
  icon = '🦁';
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
}
