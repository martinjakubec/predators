import {GridCellState} from '../Grid';
import {getAnimalInstance} from '../utils/getAnimalInstance';
import {MapData} from './types';

export const generateMapData = (
  width: number,
  height: number,
  mapData: MapData
): GridCellState[][] => {
  const map: GridCellState[][] = Array.from({length: height}, () =>
    Array.from({length: width}, () => {
      return {
        animal: null,
        locked: false,
      };
    })
  );

  mapData.data.forEach(({coordinates, animal}) => {
    const [x, y] = coordinates;
    map[y][x].animal = getAnimalInstance(animal, x, y);
    map[y][x].locked = true;
  });

  return map;
};
