import {GridCell} from './GridCell';
import {BasePredator, PredatorName} from '../Predators/predators';
import {getAnimalInstance} from '../utils/getAnimalInstance';
import {BasePrey} from '../Prey/prey';

interface GridProps {
  state: GridState;
  setState: React.Dispatch<React.SetStateAction<GridState>>;
  selectedPredator: PredatorName | null;
}

export type GridCellState = {
  locked: boolean;
  animal: null | BasePredator | BasePrey;
};

export interface GridState {
  gridCells: GridCellState[][];
}

export function Grid({state, setState, selectedPredator}: GridProps) {
  function updateGridCell(gridX: number, gridY: number) {
    setState((prevState) => {
      const newState: GridState = {
        ...prevState,
        gridCells: prevState.gridCells.map((row, y) => {
          return row.map((value, x) => {
            if (gridX == x && gridY == y) {
              if (value.locked) {
                return value;
              } else if (
                value &&
                value.animal &&
                value.animal.name === selectedPredator &&
                !value.locked
              ) {
                return {
                  ...value,
                  animal: null,
                };
              } else {
                return {
                  ...value,
                  animal: getAnimalInstance(selectedPredator, x, y),
                };
              }
            } else {
              return value;
            }
          });
        }),
      };
      return newState;
    });
  }

  return (
    <div className="border-collapse flex flex-col items-center">
      {state.gridCells.map((row, y) => (
        <div key={y} className="flex">
          {row.map((value, x) => (
            <GridCell
              key={`${x}${y}`}
              x={x}
              y={y}
              creature={value}
              updateFunction={updateGridCell}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
