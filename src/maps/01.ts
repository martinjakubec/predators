import {GridCellState} from '../Grid';

export const map01: GridCellState[][] = Array.from({length: 15}, () =>
  Array.from({length: 15}, () => {
    return {
      animal: null,
      locked: false,
    };
  })
);
