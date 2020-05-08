import React, { useState } from 'react';
import './App.scss';

import MathView from './MathView';
import StreakBox from './StreakBox';
import { getSimpleTasks, getTimesTablesTask, getDivisionTasks } from './tasks/simple.js';

const App = () => {
    const tasks = [getSimpleTasks, getTimesTablesTask, getDivisionTasks];
    const [choice, setChoice] = useState(0);
    const [streak, setStreak] = useState(0);
    const data = tasks[choice].call();
    const streakHandler = latest => {
        const newStreak = latest === 0 ? 0 : streak + 1;
        setStreak(newStreak);
    };

    return (
        <div className="App-container">
            <div className="App">
                <MathView key={data.description}
                          streakHandler={streakHandler}
                          taskData={data}/>
                <StreakBox streak={streak} />
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
