import {BasePredator, Predator} from './predators';

export class Lion extends BasePredator implements Predator {
  name = 'Lion';
  icon = '🦁';
  position: {x: number; y: number};
  
  constructor(x: number, y: number) {
    super();
    this.position = {
      x,
      y,
    };
  }
  
  attackMove = () => {
    return {
      x: 1,
      y: 1,
    };
  };
}
