import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './SumOptionsPanel.scss';

const SumOptionsPanel = (props) => {
    const onClickHandler = props.onClickHandler;
    // todo https://stackoverflow.com/a/29810951/821169 understand and better onClick handlers
    const problemType = props.problemType;
    const [choice, setChoice] = useState(problemType);
    useEffect(() => onClickHandler(choice), [choice, onClickHandler]);

    const optionButtons = props.problemMap.map((item) => {
        const classes = item.problemType === choice ? 'SumOptionsPanel SumOptionsPanel-selected' : 'SumOptionsPanel';
        return <button
            key={item.problemType}
            onClick={() => setChoice(item.problemType)}
            className={classes}>
            {item.symbol}
        </button>;
    });

    return (
        <div>
            {optionButtons}
        </div>
    );
};

SumOptionsPanel.propTypes = {
    onClickHandler: PropTypes.func,
    problemType: PropTypes.string,
    problemMap: PropTypes.arrayOf(PropTypes.shape({
        problemType: PropTypes.string,
        symbol: PropTypes.string,
    })),
};

export default SumOptionsPanel;