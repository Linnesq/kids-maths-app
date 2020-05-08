import React from 'react';
import { render } from '@testing-library/react';
import StreakBox from './StreakBox';

test("Streak Box - not on a roll", () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 10);
    const { container, getByText } = render(<StreakBox streak={5}/>);

    expect(getByText('Current Streak: 5')).toBeInTheDocument();
    expect(getByText('Best Streak: 10')).toBeInTheDocument();
    expect(container.getElementsByClassName('StreakBox-on-roll')).toHaveLength(0);
});

test("Streak Box - on a roll", () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 4);
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { container } = render(<StreakBox streak={5}/>);

    expect(setItemSpy).toHaveBeenCalledWith('kidsmaths.hiscore', 5);
    expect(container.getElementsByClassName('StreakBox-on-roll')).toHaveLength(2);
});

