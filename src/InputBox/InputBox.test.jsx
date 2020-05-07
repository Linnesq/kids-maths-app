import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import InputBox from './InputBox';

test('handlers should be triggered by user actions', () => {
    const mockValueChangeHandler = jest.fn();
    const mockOnSubmitHandler = jest.fn();
    const { container } = render(<InputBox
        onValueChangeHandler={mockValueChangeHandler}
        intValue={2}
        onSubmit={mockOnSubmitHandler}
    />);

    const input = container.firstChild;

    fireEvent.change(input, { target: { value: 3 } });
    expect(mockValueChangeHandler).toHaveBeenCalledTimes(1);
    expect(mockValueChangeHandler).toHaveBeenCalledWith(3);
    // expect(input.value).not.toBe(3);
    // this doesn't mean input.value has changed
    // input.value is bound to state in the parent.

    fireEvent.keyUp(input, { keyCode: 13 });
    expect(mockOnSubmitHandler).toHaveBeenCalledTimes(1);
});

test('NaN value props should default to an empty string', () => {
    const { container } = render(<InputBox
        onValueChangeHandler={jest.fn()}
        intValue="NaN"
        onSubmit={jest.fn()}
    />);

    expect(container.firstChild.value).toMatch("");
});