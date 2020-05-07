import React from 'react';
import PropTypes from 'prop-types';

import './TaskOptionsPanel.scss';

const TaskOptionsPanel = (props) => {
    const optionButtons = props.controlInfo.map((item) => {
        const classes = item.displayText === props.displayText
            ? 'TaskOptionsPanel TaskOptionsPanel-selected'
            : 'TaskOptionsPanel';

        return (
            <button
            className={classes}
            key={item.displayText}
            type="button"
            onClick={() => props.onClickHandler(item.displayText)}>
                {item.displayText}
            </button>);
    });

    return (
        <div>
            {optionButtons}
        </div>
    );
};

TaskOptionsPanel.propTypes = {
    onClickHandler: PropTypes.func,
    displayText: PropTypes.string,
    controlInfo: PropTypes.arrayOf(PropTypes.shape({
        taskType: PropTypes.string,
        displayText: PropTypes.string,
    })),
};

export default TaskOptionsPanel;