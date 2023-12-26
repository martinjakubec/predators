import {Bear} from '../Predators/bear';
import {Lion} from '../Predators/lion';
import {PredatorName} from '../Predators/predators';
import {Tiger} from '../Predators/tiger';
import {PreyName} from '../Prey/prey';
import {Rabbit} from '../Prey/rabbit';
import {Sheep} from '../Prey/sheep';
import {Zebra} from '../Prey/zebra';
import {GridCellState, GridState} from '../components/Grid';

export function getPredatorInstance(
  predatorName: PredatorName | null,
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
      return null;
  }
}

export function getPreyInstance(
  preyName: PreyName | null,
  x: number,
  y: number
) {
  switch (preyName) {
    case PreyName.Zebra:
      return new Zebra(x, y);
    case PreyName.Rabbit:
      return new Rabbit(x, y);
    case PreyName.Sheep:
      return new Sheep(x, y);
    default:
      return null;
  }
}

export function getAnimalInstance(
  name: PreyName | PredatorName | null,
  x: number,
  y: number
) {
  return (
    getPreyInstance(name as PreyName, x, y) ||
    getPredatorInstance(name as PredatorName, x, y)
  );
}
