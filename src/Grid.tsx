import {useEffect, useState} from 'react';
import {GridCell} from './GridCell';
import {Predator} from './Predators/predators';
import {Lion} from './Predators/lion';

interface GridProps {
  gridHeight: number;
  gridWidth: number;
}

export type GridCellState = null | Predator;

interface GridState {
  gridCells: GridCellState[][];
  isRunning: boolean;
}

export function Grid({gridHeight, gridWidth}: GridProps) {
  const defaultGridState: GridState = {
    isRunning: false,
    gridCells: Array.from<GridCellState[]>({length: gridHeight}).fill(
      Array.from<GridCellState>({length: gridWidth}).fill(new Lion(1, 1))
    ),
  };

  const [currentMapId, setCurrentMapId] = useState<string>('');

  useEffect(() => {
    // import map from './Maps/map1.json';
    // setCurrentMapId(map.id);
  }, [currentMapId]);

  const [gridState, setGridState] = useState<GridState>(defaultGridState);



  return (
    <div className="border-collapse">
      {gridState.gridCells.map((row, y) => (
        <div key={y} className="flex">
          {row.map((value, x) => (
            <GridCell key={`${x}${y}`} x={x} y={y} creature={value} />
          ))}
        </div>
      ))}
    </div>
  );
}
