import {useEffect, useState} from 'react';
import {Grid, GridState} from './components/Grid';
import {LevelSelect} from './components/LevelSelect';
import * as mapData from './maps';
import {generateMapData} from './maps/generateMapData';
import {MapData} from './maps/types';
import {ControlButtons} from './components/ControlButtons';
import {PredatorSelect} from './components/AnimalSelect';
import {PredatorName} from './Predators/predators';
import {BasePrey} from './Prey/prey';

function App() {
  const [currentLevelNumber, setCurrentLevelNumber] = useState<string>('01');
  const [currentLevelData, setCurrentLevelData] = useState<MapData>(
    mapData['map01'].default
  );
  const [gridState, setGridState] = useState<GridState>({
    gridCells: generateMapData(currentLevelData),
  });
  const [selectedPredator, setSelectedPredator] = useState<PredatorName | null>(
    null
  );

  const [turn, setTurn] = useState<number>(0);

  // Update grid state when level changes
  useEffect(() => {
    const gridState: GridState = {
      gridCells: generateMapData(
        // @ts-ignore-next-line
        // This is ignored because the key is dynamic and TS doesn't like that
        mapData[`map${currentLevelNumber}`].default
      ),
    };

    setGridState(gridState);
  }, [currentLevelNumber]);

  // get all prey, do prey turns
  // update grid state
  // get all predators, do predator turns
  // update grid state

  async function doPreyTurns() {
    let preyToAct: BasePrey[] = [];
    gridState.gridCells.forEach((row) => {
      row.forEach((cell) => {
        if (cell.animal && cell.animal instanceof BasePrey) {
          preyToAct.push(cell.animal);
        }
      });
    });
    preyToAct.sort((a, b) => (a.uuid > b.uuid ? 1 : -1));
    for (let prey of preyToAct) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const prevPosition = {...prey.position};
      prey.move(gridState);
      setGridState((prevState) => {
        const newGridState = {...prevState};
        if (
          newGridState.gridCells[prevPosition.y][prevPosition.x].animal == prey
        ) {
          newGridState.gridCells[prevPosition.y][prevPosition.x].animal = null;
        }
        newGridState.gridCells[prey.position.y][prey.position.x].animal = prey;
        return newGridState;
      });
    }
  }

  return (
    <>
      <div className="container mx-auto p-10 flex justify-center">
        <button onClick={doPreyTurns}>prey turns</button>
        <div>
          <LevelSelect
            currentLevelNumber={currentLevelNumber}
            setCurrentLevelNumber={setCurrentLevelNumber}
          />
          <Grid
            state={gridState}
            setState={setGridState}
            selectedPredator={selectedPredator}
          />
          <PredatorSelect
            selectedPredator={selectedPredator}
            setSelectedPredator={setSelectedPredator}
          />
          <ControlButtons
            currentLevelData={currentLevelData}
            currentLevelNumber={currentLevelNumber}
            gridState={gridState}
            setCurrentLevelData={setCurrentLevelData}
            setCurrentLevelNumber={setCurrentLevelNumber}
            setGridState={setGridState}
          />
        </div>
      </div>
    </>
  );
}

export default App;
