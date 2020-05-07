import React from 'react';
import PropTypes from 'prop-types';
import './InputBox.scss';

const InputBox = (props) => {
    const { onValueChangeHandler, intValue, onSubmit } = props;
    
    const onChangeHandler = event => onValueChangeHandler(parseInt(event.target.value, 10));

    const onKey = (event) => {
        if (event.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <input
            type="number"
            value={isNaN(intValue) ? "" : intValue}
            onChange={onChangeHandler}
            className="InputBox"
            onKeyUp={onKey}
            autoFocus
        />
    );
};

InputBox.propTypes = {
    intValue: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string
    ]),
    onValueChangeHandler: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default InputBox;