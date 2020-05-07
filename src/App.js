import React, { useState, useEffect } from 'react';
import './App.scss';

import MathView from './MathView';
import { getSimpleTasks, getTimesTablesTask, getDivisionTasks } from './tasks/simple.js';

const App = () => {
  const tasks = [getSimpleTasks, getTimesTablesTask, getDivisionTasks];
  const [choice, setChoice] = useState(0);
  let data = tasks[choice]();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { data = tasks[choice]() }, [choice]);

  return (
      <div className="App-container">
          <div className="App">
              <MathView key={data.description}
                        taskData={data}/>
              <div className="App-switcher">
                  <span>Other tasks...</span>
                  {choice !== 0 && <button type="button"
                                           onClick={() => setChoice(0)}>
                      Mixed Tasks
                  </button>}
                  {choice !== 1 && <button type="button"
                                           onClick={() => setChoice(1)}>
                      Times Tables
                  </button>}
                  {choice !== 2 && <button type="button"
                                           onClick={() => setChoice(2)}>
                      Division
                  </button>}
              </div>
          </div>
      </div>
  );
};
export default App;
