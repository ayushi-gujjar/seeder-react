import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SliderComp from './SliderComp';

// Mock data for testing
const mockData = {
  totalAmount: 250000,
};

test('renders SliderComp with correct props and handles value change', () => {
  const { getByRole } = render(<SliderComp {...mockData} />);
  const sliderElement = getByRole('slider');

  // Assertions
  expect(sliderElement).toBeInTheDocument();
  expect(sliderElement).toHaveAttribute('aria-valuemax', '500000');
  expect(sliderElement).toHaveAttribute('aria-valuetext', '250000°C');

  // Simulate value change
  fireEvent.change(sliderElement, { target: { value: 300000 } });

  // Check if the value state is updated
  expect(sliderElement).toHaveAttribute('aria-valuetext', '300000°C');
});

test('renders SliderComp with default totalAmount when not provided', () => {
  const { getByRole } = render(<SliderComp />);
  const sliderElement = getByRole('slider');

  // Assertions
  expect(sliderElement).toBeInTheDocument();
  expect(sliderElement).toHaveAttribute('aria-valuemax', '500000');
  expect(sliderElement).toHaveAttribute('aria-valuetext', '0°C');
});

// Add more test cases to cover different scenarios and edge cases.
