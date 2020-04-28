import React, { useState, useEffect } from 'react';
import DisplayBox from '../DisplayBox';
import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton'
import SumOptionsPanel from '../SumOptionsPanel';

import './SumView.scss';
import { getSimpleAddition, getSimpleMultiplication, getSimpleDivision, getSimpleSubtraction } from '../utils/sums.js';

const problemTypes = {
    addition: getSimpleAddition,
    multiplication: getSimpleMultiplication,
    division: getSimpleDivision,
    subtraction: getSimpleSubtraction,
};

// TODO, move
const symbolsProblemMap = {
    ADDITION: { symbol: "+", problemType: "addition" },
    MULTIPLICATON: { symbol: "×", problemType: "multiplication" },
    DIVISION: { symbol: "÷", problemType: "division" },
    SUBTRACTION: { symbol: "−", problemType: "subtraction" },
};

const SumView = () => {
    const [result, setResult] = useState(null);
    const [value, setValue] = useState("");
    const [problem, setProblem] = useState('addition');
    const [sum, setSum] = useState(getSimpleAddition());

    const onSubmitHandler = () => {
        if (result === "Correct") {
            // TODO hacky. if already correctly submitted once
            onNewSum();
        } else {
            setResult(value === sum.right ? "Correct" : "Wrong");
        }
    };

    const getProblemFunction = () => (problemTypes[problem]);

    const onNewSum = () => setSum(getProblemFunction.call());

    const onSumTypeChange = (problemType) => setProblem(problemType);

    const onInputValueChange = (newIntValue) => setValue(newIntValue);

    useEffect(() => {
        setSum(problemTypes[problem].call())
    }, [problem]);

    useEffect(() => {
        setValue(null);
        setResult(null);
        setValue("");
    }, [sum]);

    return (
        <>
            <div className="SumView">
                <DisplayBox value={sum.left} />
                <span className="SumView-sign">{sum.operator}</span>
                <InputBox onValueChangeHandler={onInputValueChange} intValue={value} onSubmit={onSubmitHandler} />
                <span className="SumView-sign">=</span>
                <DisplayBox value={sum.answer} />
            </div>
                <SubmitButton onClickHandler={onSubmitHandler} />
            <div>
                <h3>Debug info: {result}</h3>
                <button onClick={onNewSum}>New sum</button>
            </div>
            <SumOptionsPanel onClickHandler={onSumTypeChange} problemType={problem} problemMap={Object.values(symbolsProblemMap)} />
        </>
    )
};

export default SumView;