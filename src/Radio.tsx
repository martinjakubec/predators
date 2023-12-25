import {Dispatch, SetStateAction} from 'react';
import {PredatorIcon, PredatorName} from './Predators/predators';
import {PreyIcon, PreyName} from './Prey/prey';

export type PredatorSelectRadioProps = {
  setSelectedPredator: Dispatch<SetStateAction<PredatorName | null>>;
  predatorName: PredatorName;
  predatorIcon: PredatorIcon;
};

export function PredatorSelectRadio({
  predatorName,
  predatorIcon,
  setSelectedPredator,
}: PredatorSelectRadioProps) {
  return (
    <div className="flex flex-col justify-center align-middle pt-4">
      <label htmlFor={predatorName} className="flex flex-col text-center">
        <span className="text-6xl text-center pb-2">{predatorIcon}</span>
        <span>{predatorName}</span>
      </label>
      <input
        className="block"
        type="radio"
        name="animalType"
        id={predatorName}
        onChange={(e) => {
          if (e.target.checked) {
            setSelectedPredator(
              predatorName == PredatorName.Null ? null : predatorName
            );
          }
        }}
      />
    </div>
  );
}
