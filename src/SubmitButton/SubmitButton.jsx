import React from 'react';
import PropTypes from 'prop-types';
import './SubmitButton.scss';

const SubmitButton = (props) => {
    return (
        <div className="SubmitButton">
            <button data-testid="submitButton"
                    type="submit"
                    onClick={props.onClickHandler}>
                {props.buttonText}
            </button>
        </div>
    );
};

SubmitButton.propTypes = {
    onClickHandler: PropTypes.func,
    buttonText: PropTypes.string,
};

export default SubmitButton;