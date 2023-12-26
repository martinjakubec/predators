import {GridCellState} from '../components/Grid';
import {Position} from './types';

export function getCellsInPosition(
  cellPositions: Position[],
  grid: GridCellState[][]
): Position[] {
  const positions: Position[] = [];
  for (let cellPosition of cellPositions) {
    if (grid[cellPosition.y] && grid[cellPosition.y][cellPosition.x]) {
      positions.push(cellPosition);
    }
  }
  return positions;
}

export function getFinalDirectionsFrom2DVector(
  {x, y}: Position,
  forward: number,
  sideStep: number
) {
  const directions: Position[] = [];
  directions.push(
    {x: x - sideStep, y: y - forward},
    {x: x + sideStep, y: y - forward},
    {x: x - sideStep, y: y + forward},
    {x: x + sideStep, y: y + forward},
    {y: y - sideStep, x: x - forward},
    {y: y + sideStep, x: x - forward},
    {y: y - sideStep, x: x + forward},
    {y: y + sideStep, x: x + forward}
  );
  return directions;
}

export function getAllDirectionsFrom2DVector(
  {x, y}: Position,
  forward: number,
  sideStep: number
) {
  // throw new Error('Not implemented');
  const directions: Position[] = [];
  for (let i = -forward; i <= forward; i++) {
    if (i === 0) continue;
    directions.push({x: x + i, y}, {x, y: y + i});
    if (i == -forward || i == forward) {
      for (let j = -sideStep; j <= sideStep; j++) {
        if (j === 0) continue;
        directions.push({x: x + i, y: y + j}, {x: x + j, y: y + i});
      }
    }
  }
  return directions;
}

export function getRandomElementFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
