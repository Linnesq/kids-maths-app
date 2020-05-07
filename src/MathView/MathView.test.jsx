import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MathView from './MathView';
import { getDivisionTasks } from '../tasks/simple';

let mockMath;

const mockProps = () => {
    let mockProps = getDivisionTasks();
    mockProps.display.userFills = 'answer';
    return mockProps;
};

describe("MathView Component", () => {
    beforeEach(() => mockMath = jest.spyOn(global.Math, 'random').mockReturnValue(0.2));
    
    afterEach(() => mockMath.mockRestore());

    test('should initialise with maths problem', () => {
        const { container } = render(<MathView taskData={mockProps()} />);
        const [left, right] = container.getElementsByClassName("DisplayBox");

        expect(left.textContent).toEqual(expect.stringMatching('6'));
        expect(right.textContent).toEqual(expect.stringMatching('2'));
    });

    test('should accept input from keyboard and clicks', () => {
        const { container, getByText } = render(<MathView taskData={mockProps()} />);
        let submitButton = container.querySelector('.SubmitButton');
        expect(submitButton.textContent).toEqual("Submit");

        const inputBox = container.querySelector('.InputBox');
        fireEvent.change(inputBox, { target: { value: 3 } }); // input '3'
        fireEvent.keyUp(inputBox, { keyCode: 13 });  // press enter

        expect(submitButton.textContent).toEqual("Next");
        expect(getByText("Correct, well done!")).toBeInTheDocument();

        fireEvent.click(getByText("Next"));
        expect(getByText("Do your best!")).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test("should not accept incorrect answers", () => {
        const { container, getByText } = render(<MathView taskData={mockProps()} />);

        const inputBox = container.querySelector('.InputBox');
        fireEvent.change(inputBox, { target: { value: 10 } }); // input '10'

        fireEvent.click(getByText("Submit"));
        expect(getByText("Unlucky, keep trying!")).toBeInTheDocument();
    });
});