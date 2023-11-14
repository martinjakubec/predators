import {GridCellState} from './Grid';

interface GridCellProps {
  x: number;
  y: number;
  creature: GridCellState;
  updateFunction: (x: number, y: number) => void;
}

export function GridCell({x, y, creature, updateFunction}: GridCellProps) {
  return (
    <div
      className={`w-10 h-10 bg-gray-100 m-[0.5px] box-border flex items-center justify-center`}
      onClick={() => updateFunction(x, y)}
    >
      {creature.animal && (
        <p className="cursor-default select-none text-2xl">
          {creature.animal?.icon}
        </p>
      )}
    </div>
  );
}
