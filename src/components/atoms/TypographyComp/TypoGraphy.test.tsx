import React from 'react';
import { render } from '@testing-library/react';
import TypographyComp from './TypographyComp';

// Mock data for testing
const mockData : any = {
  variant: 'h6',
  value: 'Hello, World!',
  textStyle: { color: 'blue' },
};

test('renders TypographyComp with correct props and content', () => {
  const { getByText } = render(<TypographyComp {...mockData} />);
  const typographyElement = getByText(mockData.value);

  // Assertions
  expect(typographyElement).toBeInTheDocument();
  expect(typographyElement).toHaveStyle('color: blue;');
  expect(typographyElement.tagName.toLowerCase()).toBe('p');
});

// Add more test cases to cover different scenarios and edge cases.
