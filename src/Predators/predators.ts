import {v4 as uuidv4} from 'uuid';
import {GridState} from '../components/Grid';

export abstract class BasePredator {
  abstract name: string;
  abstract icon: string;
  abstract position: {
    x: number;
    y: number;
  };
  uuid: string = uuidv4();
  abstract attackMove(): {
    x: number;
    y: number;
  };
  abstract turn(gridData: GridState): void;
}

export enum PredatorName {
  Bear = 'Bear',
  Lion = 'Lion',
  Tiger = 'Tiger',
  Null = 'None',
}

export enum PredatorIcon {
  Bear = '🐻',
  Lion = '🦁',
  Tiger = '🐯',
  Null = '❌',
}

// ideas
const bear = '🐻'; // done
const tiger = '🐯'; // done
const lion = '🦁'; // done
const wolf = '🐺';
const snake = '🐍';
const eagle = '🦅';
const shark = '🦈';
const crocodile = '🐊';
const polarBear = '🐻‍❄️';
const zebra = '🦓';
const horse = '🐴';
const koala = '🐨';
const raccoon = '🦝';
const fox = '🦊';
const monkey = '🐵';
const sheep = '🐏';
const hippo = '🦛';
const elephant = '🐘';
const rabbit = '🐇';
