import {MapData} from '../maps/types';
import * as mapData from '../maps';
import {GridState} from './Grid';

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
  setCurrentLevelData: React.Dispatch<React.SetStateAction<MapData>>;
  setCurrentLevelNumber: React.Dispatch<React.SetStateAction<string>>;
  gridState: GridState;
}

export function ControlButtons({
  setCurrentLevelData,
  setCurrentLevelNumber,
  gridState,
}: ControlButtonsProps) {
  return (
    <div className="pt-6 flex justify-between">
      <ControlButton
        onClick={() => {
          setCurrentLevelData(mapData['map01'].default);
          setCurrentLevelNumber('01');
        }}
      >
        Reset
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
