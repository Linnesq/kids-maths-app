import React from 'react';
import PropTypes from 'prop-types';

import './StreakBox.scss';

const StreakBox = props => {
    const { streak } = props;
    const lsHiScoreKey = 'kidsmaths.hiscore';

    const getHighScore = () => parseInt(window.localStorage.getItem(lsHiScoreKey), 10) || 0;
    
    const setHighScore = () => window.localStorage.setItem(lsHiScoreKey, streak);

    let winningClass = "";

    if (streak > 0 && streak >= getHighScore()) {
        setHighScore(streak);
        winningClass = "StreakBox-on-roll";
    }

    const currentText = `Current Streak: ${streak}`;
    const bestText = `Best Streak: ${getHighScore()}`;

    return(<div className="StreakBox">
        <span className={winningClass}>
            {currentText}
        </span>
        <br/>
        <span className={winningClass}>
            {bestText}
        </span>
    </div>);

};

StreakBox.propTypes = {
    streak: PropTypes.number.isRequired,
};

export default StreakBox;