import {PredatorName} from '../Predators/predators';
import {PreyName} from '../Prey/prey';

export type MapData = {
  size: number;
  data: MapCellData[];
};

export type MapCellData = {
  coordinates: [number, number];
  animal: PredatorName | PreyName;
};
