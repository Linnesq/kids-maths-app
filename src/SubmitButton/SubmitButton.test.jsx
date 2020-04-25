import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SubmitButton from './SubmitButton';

test('clicking on submit button should trigger handler function', () => {
    const mockHandler = jest.fn();
    const { container, getByTestId } = render(<SubmitButton onClickHandler={mockHandler}/>);
    expect(mockHandler).not.toHaveBeenCalled();
    
    fireEvent.click(getByTestId('submitButton'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
});