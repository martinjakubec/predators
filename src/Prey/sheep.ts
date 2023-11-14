import {BasePrey, PreyIcon, PreyName} from './prey';

export class Sheep extends BasePrey {
  name = PreyName.Sheep;
  icon = PreyIcon.Sheep;
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

  move() {
    return {
      x: 1,
      y: 1,
    };
  }
}
