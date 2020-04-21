import React from 'react';
import DisplayBox from '../DisplayBox';
import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton'

import './SumView.scss';
import { getSimpleAddition, getSimpleMultiplication } from '../utils/sums.js';

class SumViewOld extends React.Component {
    constructor(props) {
        super(props);
        const sumFunc = getSimpleAddition;
        this.state = {
            result: null,
            value: null,
            sum: sumFunc(),
            sumFunc: sumFunc
        };

        this.onValueChanged = this.onValueChanged.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onNewSum = this.onNewSum.bind(this);
        this.onSumTypeChange = this.onSumTypeChange.bind(this); // debug wip
    }

    onValueChanged(what) {
        console.log(`Value Changed ${what.target.value}`);

        this.setState({
            value: parseInt(what.target.value)
        });
    }

    onSubmitHandler() {
        console.log('Submit pressed!');
        this.setState({
            result: this.state.value === this.state.sum.right ? "Correct" : "Wrong"
        });
    }

    onNewSum() {
        console.log('New sum requested');
        this.setState({ sum: this.state.sumFunc(), value: null, result: null });
    }

    onSumTypeChange() {
        const currentOperator = this.state.sumFunc().operator;

        console.log(`New sumFunc requested, current operator is ${this.state.sumFunc().operator}`);
        this.setState({
            sumFunc: currentOperator === "+" ? getSimpleMultiplication : getSimpleAddition,
        }, () => this.onNewSum());
        console.log(`Changed sumFunc? New operator is ${this.state.sumFunc().operator}`);
    }

    render() {
        return <>
            <div className="SumView">
                <DisplayBox value={this.state.sum.left} />
                <span className="SumView-sign">{this.state.sum.operator}</span>
                <InputBox onValueChangeHandler={this.onValueChanged} />
                <span className="SumView-sign">=</span>
                <DisplayBox value={this.state.sum.answer} />
            </div>
            <div>
                <SubmitButton onClickHandler={this.onSubmitHandler} />
                <h3>Debug info: {this.state.result}</h3>
                <button onClick={this.onNewSum}>New sum</button>
                <button onClick={this.onSumTypeChange}>Change</button>
            </div>
        </>
    }
}

export default SumViewOld;