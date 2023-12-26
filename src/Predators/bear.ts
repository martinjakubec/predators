import {GridState} from '../components/Grid';
import {BasePredator, PredatorIcon, PredatorName} from './predators';

export class Bear extends BasePredator {
  name = PredatorName.Bear;
  icon = PredatorIcon.Bear;
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

  turn(): void {
    console.log('Bear turn', this.uuid);
  }
}
