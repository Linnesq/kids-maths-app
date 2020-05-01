import React from 'react';
import PropTypes from 'prop-types';

import DisplayBox from '../DisplayBox';
import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton'
import TaskOptionsPanel from '../TaskOptionsPanel';

import './MathView.scss';

const results = {
    UNKNOWN: 0,
    INCORRECT: 1,
    CORRECT: 2,
};

class MathView extends React.Component {
    constructor(props) {
        super(props);
        const { controls, taskFunctions } = props.taskData
        const { userFills } = props.taskData.display;
        const { range, factor } = controls[0];

        this.state = {
            result: results.UNKNOWN,
            value: "",
            displayText: controls[0].displayText, // TODO, this is acting as an Unique ID
            taskType: controls[0].taskType,
            task: taskFunctions[controls[0].taskType].apply(this, [userFills, range, factor]),
            range,
            factor,
        };
    }

    componentDidMount() {
        // eslint-disable-next-line no-console
        console.debug('component mounted');
    }

    componentWillUnmount() {
        // eslint-disable-next-line no-console
        console.debug('component unmounting');
    }

    onSubmitHandler = () => {
        if (this.state.result === results.CORRECT) {
            this.onNewTask();
        } else {
            const isCorrect = this.state.value === this.state.task[this.state.task.userFills];
            this.setState({
                result: isCorrect ? results.CORRECT : results.INCORRECT,
                value: isCorrect ? this.state.value : "" });
        }
    }

    getTaskCreator = () => {
        return this.props.taskData.taskFunctions[this.state.taskType];
    }

    getTaskCreatorArgs = () => [this.props.taskData.display.userFills, this.state.range, this.state.factor];

    onNewTask = () => {
        this.setState({
            task: this.getTaskCreator().apply(this, this.getTaskCreatorArgs()),
            value: "",
            result: results.UNKNOWN,
        });
    }

    onTaskTypeChange = (displayText) => {
        const newTask = this.props.taskData.controls.filter(item => item.displayText === displayText)[0];
        const newFunction = this.props.taskData.taskFunctions[newTask.taskType];
        const { range, factor } = newTask;
        const args = [this.props.taskData.display.userFills, range, factor];
        
        this.setState({
            taskType: newTask.taskType,
            displayText: newTask.displayText,
            value: "",
            result: null,
            task: newFunction.apply(this, args),
            range,
            factor
        });
    }

    onInputValueChange = (newValue) => {
        this.setState({
            value: newValue,
        });
    }

    render(){
        const inputBox = <InputBox onValueChangeHandler={this.onInputValueChange} intValue={this.state.value} onSubmit={this.onSubmitHandler} />;
        const { controls } = this.props.taskData;
        const { left, right, answer } = this.state.task;
        let resultsText = "Do your best!";
        if (this.state.result === results.CORRECT){
            resultsText = "Correct, well done!";
        } else if (this.state.result === results.INCORRECT) {
            resultsText = "Unlucky, keep trying!";
        }

        const submitButtonText = this.state.result === results.CORRECT ? "Next" : "Submit";

        return (
            <>
                <div className="MathView">
                    {this.state.task.userFills === "left" ? inputBox : <DisplayBox value={left} />}
                    <span className="MathView-sign">{this.state.task.operator}</span>
                    {this.state.task.userFills === "right" ? inputBox : <DisplayBox value={right}/>}
                    <span className="MathView-sign">=</span>
                    {this.state.task.userFills === "answer" ? inputBox : <DisplayBox value={answer} />}
                </div>
                    <SubmitButton onClickHandler={this.onSubmitHandler} buttonText={submitButtonText} />
                <div>
                    <h3>{resultsText}</h3>
                    <button onClick={this.onNewTask}>New Math Question</button>
                </div>
                <TaskOptionsPanel
                    onClickHandler={this.onTaskTypeChange}
                    displayText={this.state.displayText}
                    controlInfo={controls} />
            </>
        )
    }
}

MathView.propTypes = {
    taskData: PropTypes.shape({
        controls: PropTypes.arrayOf(PropTypes.shape({
            taskType: PropTypes.string.isRequired,
            displayText: PropTypes.string.isRequired,
            range: PropTypes.number,
            factor: PropTypes.number,
    })),
        taskFunctions: PropTypes.objectOf(PropTypes.func),
        display: PropTypes.shape({
            userFills: PropTypes.oneOf(['left', 'right', 'random']).isRequired,
        }),
    }),
};

export default MathView;