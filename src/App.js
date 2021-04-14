import { useState } from 'react';
import Count from './components/Count';

import './App.css';

function App() {
  const [Countstate, setCount] = useState(0);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            if (Countstate < 1) {
              return null;
            }
            setCount(Countstate - 1);
          }}
        >
          -
        </button>
        <h1>{`${Countstate} Minute`}</h1>
        <button
          onClick={() => {
            setCount(Countstate + 1);
          }}
        >
          +
        </button>
      </div>
      {Countstate ? (
        <Count Countstate={Countstate} setCount={setCount} />
      ) : null}
    </div>
  );
}

export default App;
