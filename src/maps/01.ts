import {PreyName} from '../Prey/prey';
import {MapData} from './types';

const map01: MapData = {
  size: 10,
  data: [
    {
      animal: PreyName.Rabbit,
      coordinates: [2, 4],
    },
    {
      animal: PreyName.Rabbit,
      coordinates: [1, 3],
    },
    {
      animal: PreyName.Rabbit,
      coordinates: [10, 12],
    },
    {
      animal: PreyName.Rabbit,
      coordinates: [4, 10],
    },
  ],
};

export default map01;
