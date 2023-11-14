export abstract class BasePrey {
  abstract name: string;
  abstract icon: string;
  abstract position: {
    x: number;
    y: number;
  };
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
