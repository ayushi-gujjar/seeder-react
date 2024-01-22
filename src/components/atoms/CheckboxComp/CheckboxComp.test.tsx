import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import CheckboxComp from './CheckboxComp';

// Mock data for testing
const mockData = {
  isMargin: true,
  onChange: jest.fn(),
};

test('renders CheckboxComp with correct props and handles change event', () => {
  const { getByRole } = render(<CheckboxComp {...mockData} />);
  const checkboxElement = getByRole('checkbox');
  expect(checkboxElement).toBeInTheDocument();
  fireEvent.click(checkboxElement);
  expect(mockData.onChange).toHaveBeenCalledWith(true);
});


test('renders CheckboxComp with correct styles', () => {
  // Mock props
  const mockProps = {
    isMargin: false,
    onChange: jest.fn(), // Mock the onChange function,
    value : true
  };

  const { container } = render(<CheckboxComp {...mockProps} />);

  const checkboxCompRoot = container.firstChild;

  
});
