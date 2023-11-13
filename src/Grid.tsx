import {useState} from 'react';
import {GridCell} from './GridCell';
import {BasePredator, PredatorName} from './Predators/predators';
import {AnimalSelectRadio} from './Radio';

interface GridProps {
  gridHeight: number;
  gridWidth: number;
}

export type GridCellState = null | BasePredator;

interface GridState {
  gridCells: GridCellState[][];
  isRunning: boolean;
}

export function Grid({gridHeight, gridWidth}: GridProps) {
  const defaultGridState: GridState = {
    isRunning: false,
    gridCells: Array.from<GridCellState[]>({length: gridHeight}).fill(
      Array.from<GridCellState>({length: gridWidth}).fill(null)
    ),
  };

  const [gridState, setGridState] = useState<GridState>(defaultGridState);
  const [selectedAnimal, setSelectedAnimal] = useState<PredatorName | null>(
    null
  );

  return (
    <div>
      <div className="border-collapse">
        {gridState.gridCells.map((row, y) => (
          <div key={y} className="flex">
            {row.map((value, x) => (
              <GridCell key={`${x}${y}`} x={x} y={y} creature={value} />
            ))}
          </div>
        ))}
      </div>
      <p className='pt-6'>Selected animal: {selectedAnimal || 'none'}</p>
      <div className="grid-cols-3 grid pt-6">
        <AnimalSelectRadio
          predatorName={PredatorName.Bear}
          setSelectedAnimal={setSelectedAnimal}
        />
        <AnimalSelectRadio
          predatorName={PredatorName.Lion}
          setSelectedAnimal={setSelectedAnimal}
        />
        <AnimalSelectRadio
          predatorName={PredatorName.Tiger}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
    </div>
  );
}
