import React, { useState, useEffect } from 'react';
import DisplayBox from '../DisplayBox';
import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton'

import './SumView.scss';
import { getSimpleAddition, getSimpleMultiplication } from '../utils/sums.js';

const problemTypes = {
    addition: getSimpleAddition,
    multiplication: getSimpleMultiplication,
};

const SumView = () => {
    const [result, setResult] = useState(null);
    const [value, setValue] = useState("");
    const [problem, setProblem] = useState('addition');
    const [sum, setSum] = useState(getSimpleAddition());

    const onSubmitHandler = () => setResult(value === sum.right ? "Correct" : "Wrong");

    const getProblemFunction = () => (problemTypes[problem]);
    
    const onNewSum = () => setSum(getProblemFunction.call());

    const onSumTypeChange = () => setProblem(problem === 'addition' ? 'multiplication' : 'addition');

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
            <div>
                <SubmitButton onClickHandler={onSubmitHandler} />
                <h3>Debug info: {result}</h3>
                <button onClick={onNewSum}>New sum</button>
                <button onClick={onSumTypeChange}>Change</button>
            </div>
        </>
    )
};

export default SumView;