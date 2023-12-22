import {Grid} from './Grid';
import {GRID_SIZE} from './constants';

function App() {
  return (
    <div className="container mx-auto p-10 flex justify-center">
      <Grid gridHeight={GRID_SIZE} gridWidth={GRID_SIZE} />
    </div>
  );
}

export default App;
