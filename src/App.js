import React from 'react';
import './App.scss';

import MathView from './MathView';
// eslint-disable-next-line
import { getSimpleTasks, getTimesTablesTask } from './tasks/simple.js'

const App = () => {
  // const data = getSimpleTasks();
  const data = getTimesTablesTask();
  return (
    <div className="App">
      <MathView taskData={data}/>
    </div>
  );
};
export default App;
