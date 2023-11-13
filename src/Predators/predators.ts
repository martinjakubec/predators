export interface Predator {
  name: string;
  icon: string;
  position: {
    x: number;
    y: number;
  };
  attackMove: () => {
    x: number;
    y: number;
  };
}

export abstract class BasePredator implements Predator {
  abstract name: string;
  abstract icon: string;
  abstract position: {
    x: number;
    y: number;
  };
  abstract attackMove: () => {
    x: number;
    y: number;
  };
}
