import {Dispatch, SetStateAction} from 'react';
import {PredatorIcon, PredatorName} from './Predators/predators';
import {PreyIcon, PreyName} from './Prey/prey';

export type AnimalSelectRadioProps = {
  setSelectedAnimal: Dispatch<SetStateAction<PredatorName | PreyName | null>>;
  animalName: PredatorName | PreyName;
  animalIcon: PredatorIcon | PreyIcon;
};

export function AnimalSelectRadio({
  animalName,
  animalIcon,
  setSelectedAnimal,
}: AnimalSelectRadioProps) {
  return (
    <div className="flex flex-col justify-center align-middle pt-4">
      <label htmlFor={animalName} className="flex flex-col text-center">
        <span className="text-6xl text-center">{animalIcon}</span>
        <span>{animalName}</span>
      </label>
      <input
        className="block"
        type="radio"
        name="animalType"
        id={animalName}
        onChange={(e) => {
          if (e.target.checked) setSelectedAnimal(animalName);
        }}
      />
    </div>
  );
}
