import React from 'react';
import PropTypes from 'prop-types';

import './TaskOptionsPanel.scss';

const TaskOptionsPanel = (props) => {
    const optionButtons = props.controlInfo.map((item) => {
        const classes = item.displayText === props.displayText
            ? 'TaskOptionsPanel TaskOptionsPanel-selected'
            : 'TaskOptionsPanel';

        return <button
            key={item.displayText}
            onClick={() => props.onClickHandler(item.displayText)}
            className={classes}>
            {item.displayText}
        </button>;
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