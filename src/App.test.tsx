import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  // Arrange
  const { getByText } = render(<App />);

  // Act
  const mainElement = getByText(/Main/i);

  // Assert
  expect(mainElement).toBeInTheDocument();
});
