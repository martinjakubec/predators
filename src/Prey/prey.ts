import {v4 as uuidv4} from 'uuid';

export abstract class BasePrey {
  abstract name: string;
  abstract icon: string;
  abstract position: {
    x: number;
    y: number;
  };
  uuid: string = uuidv4();
  abstract move(): {
    x: number;
    y: number;
  };
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
