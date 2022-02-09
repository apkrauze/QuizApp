import React, { FC} from 'react';
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
        <input type='text' placeholder='Text...' />
        <input type='number' placeholder='Deadline (in days)...' />
        </div>
        <button>ADD TASK</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
