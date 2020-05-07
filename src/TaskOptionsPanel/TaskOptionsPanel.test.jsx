import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TaskOptionsPanel from './TaskOptionsPanel';
import { getDivisionTasks } from '../tasks/simple';

test('TaskOptionsPanel', () => {
    const { controls } = getDivisionTasks();
    const displayText = controls[0].displayText;
    const mockHandler = jest.fn();

    const { container } = render(
    <TaskOptionsPanel 
        controlInfo={controls}
        onClickHandler={mockHandler}
        displayText={displayText} />
    );
    
    // A button for each control
    const buttons = container.getElementsByClassName('TaskOptionsPanel');
    expect(buttons.length).toBe(controls.length);

    // A class is applied to only the currently selected button
    const [selected, ...rest] = container.getElementsByClassName('TaskOptionsPanel-selected');
    expect(rest).toHaveLength(0);
    expect(selected.textContent).toBe(displayText);

    // clicking a button triggers the callback
    fireEvent.click(buttons[1]);
    expect(mockHandler).toHaveBeenCalledWith('÷3');
    expect(mockHandler).toHaveBeenCalledTimes(1);
});