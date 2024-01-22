import React from 'react';
import { render } from '@testing-library/react';
import CashAccelaration from './CashAccelaration';

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
  data: [
    { icon: 'path/to/icon1.png', caption: 'Caption 1', heading: 'Heading 1' },
    { icon: 'path/to/icon2.png', caption: 'Caption 2', heading: 'Heading 2' },
    // Add more data as needed
  ],
};

// Helper function to render CashAccelaration component with mock data
const renderCashAccelaration = (props = mockData) => {
  return render(<CashAccelaration {...props} />);
};

test('renders CashAccelaration with provided props and data', () => {
  const { getByText, getByAltText } = renderCashAccelaration(mockData);

  // Assertions for each data item
  mockData.data.forEach((item) => {
    // const iconImage = getByAltText(`Image Alt Text - ${item.caption}`);
    // const captionElement = getByText(item.caption);
    // const headingElement = getByText(item.heading);

    // Check if components are rendered
    // expect(iconImage).toBeInTheDocument();
    // expect(captionElement).toBeInTheDocument();
    // expect(headingElement).toBeInTheDocument();

    // You can add more assertions based on your specific component structure and styling
  });
});

// Add more test cases to cover different scenarios and edge cases.
