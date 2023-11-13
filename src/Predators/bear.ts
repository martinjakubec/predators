import { BasePredator } from "./predators";

export class Bear extends BasePredator {
  name = 'Bear';
  icon = '🐻';
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
      x: 3,
      y: 3,
    };
  }
}
