import {PredatorIcon, PredatorName} from '../Predators/predators';
import {PredatorSelectRadio} from '../Radio';

interface PredatorSelectProps {
  selectedPredator: PredatorName | null;
  setSelectedPredator: React.Dispatch<
    React.SetStateAction<PredatorName | null>
  >;
}

export function PredatorSelect({
  selectedPredator,
  setSelectedPredator,
}: PredatorSelectProps) {
  return (
    <>
      <p className="pt-6">Selected animal: {selectedPredator || 'none'}</p>
      <p className="text-center font-bold text-2xl pt-6">Predators</p>
      <div className="grid-cols-3 grid">
        <PredatorSelectRadio
          predatorIcon={PredatorIcon.Bear}
          predatorName={PredatorName.Bear}
          setSelectedPredator={setSelectedPredator}
        />
        <PredatorSelectRadio
          predatorIcon={PredatorIcon.Lion}
          predatorName={PredatorName.Lion}
          setSelectedPredator={setSelectedPredator}
        />
        <PredatorSelectRadio
          predatorIcon={PredatorIcon.Tiger}
          predatorName={PredatorName.Tiger}
          setSelectedPredator={setSelectedPredator}
        />
      </div>
    </>
  );
}
