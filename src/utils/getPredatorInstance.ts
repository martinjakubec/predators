import {Bear} from '../Predators/bear';
import {Lion} from '../Predators/lion';
import {PredatorName} from '../Predators/predators';
import {Tiger} from '../Predators/tiger';

export function getPredatorInstance(
  predatorName: PredatorName,
  x: number,
  y: number
) {
  switch (predatorName) {
    case PredatorName.Lion:
      return new Lion(x, y);
    case PredatorName.Tiger:
      return new Tiger(x, y);
    case PredatorName.Bear:
      return new Bear(x, y);
    default:
      throw new Error(`Unknown predator: ${predatorName}`);
  }
}
