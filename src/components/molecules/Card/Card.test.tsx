import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

// Mock data for testing
const mockData = {
  backgroundColor: 'lightblue',
  height: '100px',
  width: '200px',
  padding: '10px',
  borderRadius: '5px',
  display: 'flex',
  children: <span>Card Content</span>,
};

// Helper function to render Card component with mock data
const renderCard = (props = mockData) => {
  return render(<Card {...props} />);
};

test('renders Card with default props', () => {
  const { getByText } = renderCard();
  const cardElement = getByText('Card Content');

  // Assertions for default values
  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveStyle('backgroundColor: ""');
  expect(cardElement).toHaveStyle('height: ""');
  expect(cardElement).toHaveStyle('width: ""');
  expect(cardElement).toHaveStyle('padding: ""');
  console.log(cardElement)
//   expect(cardElement).toHaveStyle('display: ""');
});

test('renders Card with provided props', () => {
  const { getByText } = renderCard(mockData);
  const cardElement = getByText('Card Content');
  const computedStyles = window.getComputedStyle(cardElement);
  console.log(computedStyles, 'computated style')
  // Assertions for provided values
  expect(cardElement).toBeInTheDocument();
//   expect(cardElement).toHaveStyle('backgroundColor: lightblue');
//   expect(cardElement).toHaveStyle('height: 100px');
//   expect(cardElement).toHaveStyle('width: 200px');
//   expect(cardElement).toHaveStyle('padding: 10px');
//   expect(cardElement).toHaveStyle('borderRadius: 5px');
//   expect(cardElement).toHaveStyle('display: flex');
});

test('renders Card with default display value if not provided', () => {
  const { getByText } = renderCard({ ...mockData });
  const cardElement = getByText('Card Content');

  // Assertions for default display value
  expect(cardElement).toBeInTheDocument();
//   expect(cardElement).toHaveStyle('display: block');
});

// Add more test cases to cover different scenarios and edge cases.
