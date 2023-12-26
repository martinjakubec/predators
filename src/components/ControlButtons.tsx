import {MapData} from '../maps/types';
import * as mapData from '../maps';
import {GridState} from './Grid';
import {generateMapData} from '../maps/generateMapData';

interface ControlButtonProps extends React.PropsWithChildren<{}> {
  onClick: () => void;
}

function ControlButton({onClick, children}: ControlButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white mx-auto duration-100"
    >
      {children}
    </button>
  );
}

interface ControlButtonsProps {
  currentLevelData: MapData;
  setCurrentLevelData: React.Dispatch<React.SetStateAction<MapData>>;
  currentLevelNumber: string;
  setCurrentLevelNumber: React.Dispatch<React.SetStateAction<string>>;
  gridState: GridState;
  setGridState: React.Dispatch<React.SetStateAction<GridState>>;
}

export function ControlButtons({
  setCurrentLevelData,
  setCurrentLevelNumber,
  gridState,
  setGridState,
  currentLevelNumber,
}: ControlButtonsProps) {
  return (
    <div className="pt-6 grid grid-cols-2 gap-4">
      <ControlButton onClick={() => {}}>Next turn</ControlButton>
      <div></div>
      <ControlButton
        onClick={() => {
          console.log('resetting app');
          setTimeout(() => {
            setCurrentLevelData(mapData['map01'].default);
            setCurrentLevelNumber('01');
            setGridState({
              gridCells: generateMapData(mapData['map01'].default),
            });
          }, 500);
        }}
      >
        Reset app
      </ControlButton>
      <ControlButton
        onClick={() => {
          setGridState({
            gridCells: generateMapData(
              // @ts-ignore-next-line
              // This is ignored because the key is dynamic and TS doesn't like that
              mapData[`map${currentLevelNumber}`].default
            ),
          });
        }}
      >
        Reset level
      </ControlButton>
      <ControlButton
        onClick={() => {
          const data = JSON.stringify(gridState);
          console.log(data);
          navigator.clipboard.writeText(data);
        }}
      >
        Get grid data
      </ControlButton>
    </div>
  );
}
