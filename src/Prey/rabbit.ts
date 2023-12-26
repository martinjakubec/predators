import {GridState} from '../components/Grid';
import {
  getAllDirectionsFrom2DVector,
  getCellsInPosition,
  getFinalDirectionsFrom2DVector,
  getRandomElementFromArray,
} from '../utils/gridUtils';
import {Position} from '../utils/types';
import {BasePrey, PreyIcon, PreyName} from './prey';

export class Rabbit extends BasePrey {
  name = PreyName.Rabbit;
  icon = PreyIcon.Rabbit;
  position: Position = {
    x: 0,
    y: 0,
  };

  constructor(x: number, y: number) {
    super();
    this.position = {
      x,
      y,
    };
  }

  move(gridState: GridState) {
    const forwardMove = 4;
    const sideStep = 1;
    // this.position = {
    //   x: this.position.x + 1,
    //   y: this.position.y + 1,
    // };

    // return;
    const directions = getAllDirectionsFrom2DVector(
      this.position,
      forwardMove,
      sideStep
    );
    // const directions = getFinalDirectionsFrom2DVector(
    //   this.position,
    //   forwardMove,
    //   sideStep
    // );
    console.log(this.position, directions);
    const validMoves = getCellsInPosition(directions, gridState.gridCells);
    const emptyCells = validMoves.filter((cell) => {
      return !gridState.gridCells[cell.y][cell.x].animal;
    });
    if (emptyCells.length === 0) {
      return;
    } else {
      const randomPosition = getRandomElementFromArray(emptyCells);
      this.position = randomPosition;
      console.log(
        `Rabbit ${this.uuid} is moving from ${this.position.x}, ${this.position.y} to ${randomPosition.x}, ${randomPosition.y}`
      );
    }
  }
}
