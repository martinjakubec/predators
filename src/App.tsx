import {useEffect, useState} from 'react';
import {Grid, GridState} from './components/Grid';
import {LevelSelect} from './components/LevelSelect';
import * as mapData from './maps';
import {generateMapData} from './maps/generateMapData';
import {MapData} from './maps/types';
import {ControlButtons} from './components/ControlButtons';

function App() {
  const [currentLevelNumber, setCurrentLevelNumber] = useState<string>('01');
  const [currentLevelData, setCurrentLevelData] = useState<MapData>(
    mapData['map01'].default
  );

  const [gridState, setGridState] = useState<GridState>({
    gridCells: generateMapData(currentLevelData),
  });

  useEffect(() => {
    console.log('running');

    const gridState: GridState = {
      gridCells: generateMapData(
        // @ts-ignore-next-line
        // This is ignored because the key is dynamic and TS doesn't like that
        mapData[`map${currentLevelNumber}`].default
      ),
    };

    setGridState(gridState);
  }, [currentLevelNumber]);

  return (
    <div className="container mx-auto p-10 flex justify-center">
      <div>
        <LevelSelect
          currentLevelNumber={currentLevelNumber}
          setCurrentLevelNumber={setCurrentLevelNumber}
        />
        <Grid state={gridState} />
        <ControlButtons
          gridState={gridState}
          setCurrentLevelData={setCurrentLevelData}
          setCurrentLevelNumber={setCurrentLevelNumber}
        />
      </div>
    </div>
  );
}

export default App;
