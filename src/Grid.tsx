import {useState} from 'react';
import {GridCell} from './GridCell';
import {BasePredator, PredatorIcon, PredatorName} from './Predators/predators';
import {AnimalSelectRadio} from './Radio';
import {
  getAnimalInstance,
  getPredatorInstance,
} from './utils/getAnimalInstance';
import {BasePrey, PreyIcon, PreyName} from './Prey/prey';
import {generateMapData} from './maps/generateMapData';
import {MapData} from './maps/types';
import * as mapData from './maps';
interface GridProps {
  gridHeight: number;
  gridWidth: number;
}

export type GridCellState = {
  locked: boolean;
  animal: null | BasePredator | BasePrey;
};

interface GridState {
  gridCells: GridCellState[][];
}

export function Grid({gridHeight, gridWidth}: GridProps) {
  const [currentLevelData, setCurrentLevelData] = useState<MapData>(
    mapData['map01'].default
  );

  const defaultGridState: GridState = {
    gridCells: generateMapData(gridWidth, gridHeight, currentLevelData),
  };

  const [gridState, setGridState] = useState<GridState>(defaultGridState);
  const [selectedAnimal, setSelectedAnimal] = useState<
    PredatorName | PreyName | null
  >(null);
  const [isStateLocked, setIsStateLocked] = useState<boolean>(false);

  function updateGridCell(gridX: number, gridY: number) {
    if (isStateLocked) return;
    setGridState((prevState) => {
      const newState: GridState = {
        ...prevState,
        gridCells: prevState.gridCells.map((row, y) => {
          return row.map((value, x) => {
            if (gridX == x && gridY == y) {
              if (
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

  function lockState() {
    setIsStateLocked(true);
    setGridState((prevState) => {
      const newState: GridState = {
        ...prevState,
        gridCells: prevState.gridCells.map((row) => {
          return row.map((value) => {
            return {
              ...value,
              locked: true,
            };
          });
        }),
      };
      return newState;
    });
  }

  function unlockState() {
    setIsStateLocked(false);
    setGridState((prevState) => {
      const newState: GridState = {
        ...prevState,
        gridCells: prevState.gridCells.map((row) => {
          return row.map((value) => {
            return {
              ...value,
              locked: false,
            };
          });
        }),
      };
      return newState;
    });
  }

  return (
    <div>
      <div className="flex justify-between pb-6">
        <div className="flex">
          <select
            name="selectLevel"
            id="selectLevel"
            onChange={(e) => {
              setGridState({
                gridCells: generateMapData(
                  gridWidth,
                  gridHeight,
                  // @ts-ignore
                  mapData[`map${e.target.value}`].default
                ),
              });
              console.log(e.target.value);
            }}
          >
            <option value="01">Level 1</option>
            <option value="02">Level 2</option>
            <option value="03">Level 3</option>
          </select>
        </div>
        <div className="flex">
          <p className="text-end text-2xl">{isStateLocked ? '🔒' : '🔓'}</p>
        </div>
      </div>
      <div className="border-collapse border-2 border-black">
        {gridState.gridCells.map((row, y) => (
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
      <p className="text-center font-bold text-2xl pt-6">Prey</p>
      <div className="grid-cols-3 grid">
        <AnimalSelectRadio
          animalIcon={PreyIcon.Rabbit}
          animalName={PreyName.Rabbit}
          setSelectedAnimal={setSelectedAnimal}
        />
        <AnimalSelectRadio
          animalIcon={PreyIcon.Sheep}
          animalName={PreyName.Sheep}
          setSelectedAnimal={setSelectedAnimal}
        />
        <AnimalSelectRadio
          animalIcon={PreyIcon.Zebra}
          animalName={PreyName.Zebra}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
      <div className="pt-6 flex justify-between">
        <button
          className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white mx-auto duration-100"
          onClick={() => setGridState(defaultGridState)}
        >
          Reset
        </button>
        <button
          className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white mx-auto duration-100"
          onClick={lockState}
        >
          Lock State
        </button>
        <button
          className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white mx-auto duration-100"
          onClick={unlockState}
        >
          Unlock State
        </button>
        <button
          className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white mx-auto duration-100"
          onClick={() => {
            const data = JSON.stringify(gridState);
            console.log(data);
            navigator.clipboard.writeText(data);
          }}
        >
          Get grid data
        </button>
      </div>
    </div>
  );
}
