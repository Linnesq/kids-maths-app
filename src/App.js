import React, { useState } from 'react';
import './App.scss';

import MathView from './MathView';
import { getSimpleTasks, getTimesTablesTask } from './tasks/simple.js'

const App = () => {
  const [showTimesTables, setShowTimesTables] = useState(false);
  const data = showTimesTables ? getTimesTablesTask() : getSimpleTasks()
  return (
    <>
    <div className="App">
      <MathView key={data.description} taskData={data}/>
    </div>
    <div className="App App-switcher">
      <button onClick={() => setShowTimesTables(!showTimesTables)}>
        Switch Task
      </button>
    </div>
    </>
  );
};
export default App;
