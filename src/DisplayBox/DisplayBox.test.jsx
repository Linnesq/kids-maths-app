import React from 'react';
import { render } from '@testing-library/react';

import DisplayBox from './DisplayBox';

test('should match snapshot', () => {
    const box = render(<DisplayBox value={9}/>);
    expect(box.container).toMatchSnapshot();
});