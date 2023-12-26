import {BasePredator} from '../Predators/predators';
import {BasePrey} from '../Prey/prey';
import {GridState} from '../components/Grid';

export function getAnimalOrder(
  gridData: GridState
): (BasePrey | BasePredator)[] {
  let preyToAct: BasePrey[] = [];
  let predatorsToAct: BasePredator[] = [];
  gridData.gridCells.forEach((row) => {
    row.forEach((cell) => {
      if (cell.animal && cell.animal instanceof BasePrey) {
        preyToAct.push(cell.animal);
      } else if (cell.animal && cell.animal instanceof BasePredator) {
        predatorsToAct.push(cell.animal);
      }
    });
  });
  preyToAct.sort((preyA, preyB) => {
    return preyA.uuid > preyB.uuid ? 1 : -1;
  });
  predatorsToAct.sort((predatorA, predatorB) => {
    return predatorA.uuid > predatorB.uuid ? 1 : -1;
  });

  return [...preyToAct, ...predatorsToAct];
}
