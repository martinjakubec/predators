import {useEffect, useState} from 'react';
import {GridCell} from './GridCell';
import {BasePredator, PredatorIcon, PredatorName} from '../Predators/predators';
import {AnimalSelectRadio} from '../Radio';
import {
  getAnimalInstance,
  getPredatorInstance,
} from '../utils/getAnimalInstance';
import {BasePrey, PreyIcon, PreyName} from '../Prey/prey';
import {generateMapData} from '../maps/generateMapData';
import {MapData} from '../maps/types';
import * as mapData from '../maps';

interface GridProps {
  state: GridState;
}

export type GridCellState = {
  locked: boolean;
  animal: null | BasePredator | BasePrey;
};

export interface GridState {
  gridCells: GridCellState[][];
}

export function Grid({state}: GridProps) {
  const [selectedAnimal, setSelectedAnimal] = useState<
    PredatorName | PreyName | null
  >(null);

  function updateGridCell(gridX: number, gridY: number) {
    setGridState((prevState) => {
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
                value.animal.name === selectedAnimal &&
                !value.locked
              ) {
                return {
                  ...value,
                  animal: null,
                };
              } else {
                return {
                  ...value,
                  animal: getAnimalInstance(selectedAnimal, x, y),
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
    <div>
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
      <p className="pt-6">Selected animal: {selectedAnimal || 'none'}</p>
      <p className="text-center font-bold text-2xl pt-6">Predators</p>
      <div className="grid-cols-3 grid">
        <AnimalSelectRadio
          animalIcon={PredatorIcon.Bear}
          animalName={PredatorName.Bear}
          setSelectedAnimal={setSelectedAnimal}
        />
        <AnimalSelectRadio
          animalIcon={PredatorIcon.Lion}
          animalName={PredatorName.Lion}
          setSelectedAnimal={setSelectedAnimal}
        />
        <AnimalSelectRadio
          animalIcon={PredatorIcon.Tiger}
          animalName={PredatorName.Tiger}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
    </div>
  );
}
