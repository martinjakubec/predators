import {v4 as uuidv4} from 'uuid';
import {GridState} from '../components/Grid';

export abstract class BasePrey {
  abstract name: string;
  abstract icon: string;
  abstract position: {
    x: number;
    y: number;
  };
  uuid: string = uuidv4();
  abstract move(grid: GridState): void;
}

export enum PreyName {
  Rabbit = 'Rabbit',
  Sheep = 'Sheep',
  Zebra = 'Zebra',
}

export enum PreyIcon {
  Rabbit = '🐰',
  Sheep = '🐑',
  Zebra = '🦓',
}
