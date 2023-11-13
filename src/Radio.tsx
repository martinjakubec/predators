import {Dispatch, SetStateAction} from 'react';
import {PredatorIcon, PredatorName} from './Predators/predators';

export type AnimalSelectRadioProps = {
  setSelectedAnimal: Dispatch<SetStateAction<PredatorName | null>>;
  predatorName: PredatorName;
};

export function AnimalSelectRadio({
  predatorName,
  setSelectedAnimal,
}: AnimalSelectRadioProps) {
  return (
    <div className="">
      <div></div>
      <div className="flex flex-col justify-center align-middle">
        <label htmlFor={predatorName} className="flex flex-col text-center">
          <span className="text-6xl text-center">{PredatorIcon[predatorName]}</span>
          <span>{predatorName}</span>
        </label>
        <input
          className="block"
          type="radio"
          name="animalType"
          id={predatorName}
          onChange={(e) => {
            if (e.target.checked) setSelectedAnimal(predatorName);
          }}
        />
      </div>
    </div>
  );
}
