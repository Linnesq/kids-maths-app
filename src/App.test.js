import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders \"submit\" text', () => {
  const { getByText } = render(<App />);
  expect(getByText("Submit")).toBeInTheDocument();
});
