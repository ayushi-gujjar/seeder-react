import React from 'react';
import { render } from '@testing-library/react';
import PaymentsCard from './PaymentsCard';

// Mock data for testing
const mockData = {
  image: {
    src: 'path/to/image.png',
    alt: 'Image Alt Text',
    imageStyle: { width: '100px', height: '100px' },
  },
  iconTextStyle: {
    isLeft: true,
    isRight: true,
    imageStyle: { width: '50px', height: '50px' },
    icon: 'path/to/icon.png',
    textStyle: { color: 'red' },
    label: 'Test Label',
    variant: 'h3',
    onNavChange: jest.fn(),
  },
  heading: {
    varient: 'h2',
    value: 'Heading Text',
    textStyle: { color: 'blue' },
  },
  tag: {
    varient: 'h4',
    value: 'Tag Text',
    textStyle: { fontWeight: 'bold' },
  },
};

// Helper function to render PaymentsCard component with mock data
const renderPaymentsCard = (props = mockData) => {
  return render(<PaymentsCard {...props} />);
};

test('renders PaymentsCard with provided props', () => {
  const { getByText, getByAltText } = renderPaymentsCard(mockData);

  // Assertions for tag
  const tagElement = getByText('Tag Text');
  expect(tagElement).toBeInTheDocument();
  expect(tagElement).toHaveStyle({ fontWeight: 'bold' });

  // Assertions for image
  const imageElement = getByAltText('Image Alt Text');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'path/to/image.png');
  expect(imageElement).toHaveStyle({ width: '100px', height: '100px' });

  // Assertions for IconText
  const iconTextButton = getByText('Test Label').closest('button');
  expect(iconTextButton).toBeInTheDocument();

  // Assertions for heading
  const headingElement = getByText('Heading Text');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveStyle({ color: 'blue' });
  expect(headingElement.tagName.toLowerCase()).toBe('h2');
});

// Add more test cases to cover different scenarios and edge cases.
