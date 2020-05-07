import React from 'react';
import PropTypes from 'prop-types';

import './DisplayBox.scss';

const DisplayBox = (props) => {
    return (
        <div className="DisplayBox">
            <span>{props.value}</span>
        </div>
    );
};

DisplayBox.propTypes = {
    value: PropTypes.number,
};

export default DisplayBox;