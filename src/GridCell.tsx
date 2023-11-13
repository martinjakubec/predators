import {GridCellState} from './Grid';

interface GridCellProps {
  x: number;
  y: number;
  creature: GridCellState;
}

export function GridCell({x, y, creature}: GridCellProps) {
  return (
    <div className={`w-10 h-10 bg-gray-100 m-[0.5px] box-border flex items-center justify-center`}>
      {creature && <p className='cursor-default select-none'>{creature.icon}</p>}
    </div>
  );
}
