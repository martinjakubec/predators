import {BasePrey, PreyIcon, PreyName} from './prey';

export class Zebra extends BasePrey {
  name = PreyName.Zebra;
  icon = PreyIcon.Zebra;
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

  turn(): void {
    console.log('Zebra turn', this.uuid);
  }
}
