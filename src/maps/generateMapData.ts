import {GridCellState} from '../components/Grid';
import {getAnimalInstance} from '../utils/getAnimalInstance';
import {MapData} from './types';

export const generateMapData = (mapData: MapData): GridCellState[][] => {
  const map: GridCellState[][] = Array.from({length: mapData.size}, () =>
    Array.from({length: mapData.size}, () => {
      return {
        animal: null,
        locked: false,
      };
    })
  );

  mapData.data.forEach(({coordinates, animal}) => {
    const [x, y] = coordinates;
    if (map[y] && map[y][x]) {
      map[y][x].animal = getAnimalInstance(animal, x, y);
      map[y][x].locked = true;
    } else {
      console.error(`Invalid coordinates: ${x}, ${y}`);
    }
  });

  return map;
};
