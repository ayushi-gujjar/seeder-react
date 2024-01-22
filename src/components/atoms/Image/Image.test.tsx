import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

// Mock data for testing
const mockData = {
  src: 'mock-image.jpg',
  alt: 'Mock Image',
  imageStyle: { width: '100px', height: 'auto' },
};

test('renders Image component with correct props', () => {
  // Render the component with mock data
  const { getByAltText } = render(<Image {...mockData} />);

  // Get the rendered image element
  const imageElement = getByAltText(mockData.alt);

  // Assertions
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', mockData.src);
  expect(imageElement).toHaveAttribute('alt', mockData.alt);
  expect(imageElement).toHaveStyle('width: 100px; height: auto;');
});
