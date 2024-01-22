import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import SideBarBox from './SideBarBox';
import home from './../../../Images/home.png';
import coin from './../../../Images/coin.png';

// Mock data for testing
const mockData = {
  textIconStyle: {
    isLeft: true,
    isRight: true,
    imageStyle: { width: '50px', height: '50px' },
    icon: 'path/to/icon.png',
    textStyle: { color: 'red' },
    label: 'Test Label',
    variant: 'h3',
    onNavChange: jest.fn(),
  },
  headers: [
    { value: 'Home', path: '/home', img: home },
    { value: 'About', path: '/about', img: coin },
    { value: 'Contact', path: '/contact', img: home },
  ],
  onNavChange: {
    onNavigation: jest.fn(),
  },
};

// Helper function to render SideBarBox component with mock data
const renderSideBarBox = (props = mockData) => {
  return render(
    <MemoryRouter initialEntries={['/home']}>
      <SideBarBox {...props} />
    </MemoryRouter>
  );
};

test('renders SideBarBox with provided props and handles navigation', () => {
  const { getByText } = renderSideBarBox(mockData);

  // Assertions for rendered buttons
  const homeButton = getByText('Home');
  const aboutButton = getByText('About');
  const contactButton = getByText('Contact');

  expect(homeButton).toBeInTheDocument();
  expect(homeButton).toHaveClass('navitem-active');
  expect(aboutButton).toBeInTheDocument();
  expect(aboutButton).toHaveClass('navitem');
  expect(contactButton).toBeInTheDocument();
  expect(contactButton).toHaveClass('navitem');

  // Simulate click on About button
  fireEvent.click(aboutButton);

  // Check if onNavChange callback is called with the correct label
  expect(mockData.onNavChange.onNavigation).toHaveBeenCalledWith('About');
});
