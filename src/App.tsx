import React from 'react';
import TextField from "./TextField";
import {Counter} from "./Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField
          text='Hello world'
          person={{ firstName: 'Khoi', lastName: 'Nguyen' }}
          handleChange={e => console.log(e)}
      />

      <Counter>
          { ({ count, setCount }) => (<div>
              { count }
              <button onClick={() => setCount(count + 1)}>
                +
              </button>
          </div>) }
      </Counter>
    </div>
  );
};

export default App;
