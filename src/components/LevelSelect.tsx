interface LevelSelectProps {
  currentLevelNumber: string;
  setCurrentLevelNumber: React.Dispatch<React.SetStateAction<string>>;
}

export function LevelSelect({
  currentLevelNumber,
  setCurrentLevelNumber,
}: LevelSelectProps) {
  return (
    <div className="flex justify-between pb-6">
      <div className="flex">
        <select
          name="selectLevel"
          id="selectLevel"
          onChange={(e) => {
            setCurrentLevelNumber(e.target.value);
          }}
          value={currentLevelNumber}
        >
          <option value="01">Level 1</option>
          <option value="02">Level 2</option>
          <option value="03">Level 3</option>
        </select>
      </div>
    </div>
  );
}
