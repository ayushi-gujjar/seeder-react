import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonComp, { ButtonProps } from './ButtonComp';
// Mock data for testing
const mockData: ButtonProps = {
  label: 'Click Me',
  color: 'primary',
  variant: 'contained',
  class: 'custom-button',
  enable: false,
  isStartIcon: true,
  startIcon: 'path/to/icon.png',
  onNavChange: jest.fn(),
};

// Helper function to render ButtonComp with mock data
const renderButtonComp = (props: ButtonProps = mockData) => {
  return render(<ButtonComp {...props} />);
};

test('renders ButtonComp with correct props and default state', () => {
  const { getByText, getByAltText } = renderButtonComp();
  const buttonElement = getByText(mockData.label);
  const startIconElement = getByAltText('Custom Icon');

  // Assertions
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('custom-button');
  expect(buttonElement).not.toHaveClass('disable');
  expect(buttonElement).not.toBeDisabled();
  expect(startIconElement).toBeInTheDocument();
});


test('renders disabled ButtonComp when enable prop is true', () => {
  const { getByText } = renderButtonComp({ ...mockData, enable: true });
  const buttonElement = getByText(mockData.label);

  // Assertions
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('disable');
});

test('renders ButtonComp without start icon when isStartIcon is false', () => {
  const { getByText, queryByAltText } = renderButtonComp({ ...mockData, isStartIcon: false });
  const buttonElement = getByText(mockData.label);
  const startIconElement = queryByAltText('Custom Icon');

  // Assertions
  expect(buttonElement).toBeInTheDocument();
  expect(startIconElement).not.toBeInTheDocument();
});

test('calls onNavChange prop when button is clicked', () => {
  const { getByText } = renderButtonComp();
  const buttonElement = getByText(mockData.label);

  // Simulate button click
  fireEvent.click(buttonElement);

  // Check if the onNavChange prop is called with the correct argument
  expect(mockData.onNavChange).toHaveBeenCalledWith(mockData.label);
});

test('renders ButtonComp with start icon when isStartIcon is true', () => {
  const { getByAltText } = renderButtonComp({ ...mockData, isStartIcon: true });
  const startIconElement = getByAltText('Custom Icon');

  // Assertions
  expect(startIconElement).toBeInTheDocument();
});

test('calls onNavChange prop when button is clicked', () => {
  // Mock data
  const mockData: any = {
    label: 'Test Button',
    onNavChange: jest.fn(),
    color: 'primary',
    variant: 'contained',
    class: 'custom-button',
    enable: false,
    isStartIcon: true,
    startIcon: 'mock-icon.png',
  };

  // Render the ButtonComp with the mock data
  const { getByText } = render(
    <ButtonComp
      label={mockData.label}
      onNavChange={mockData.onNavChange}
      color={mockData.color}
      variant={mockData.variant}
      class={mockData.class}
      enable={mockData.enable}
      isStartIcon={mockData.isStartIcon}
      startIcon={mockData.startIcon}
    />
  );

  // Simulate button click
  const buttonElement = getByText(mockData.label);
  fireEvent.click(buttonElement);

  // Check if the onNavChange prop is called with the correct argument
  expect(mockData.onNavChange).toHaveBeenCalledWith(mockData.label);
});

test('does not call onNavChange when onNavChange is null', () => {
  const mockData : ButtonProps= {
    label: 'Test Button',
    onNavChange: null,
    color: 'primary',
    variant: 'contained',
    class: 'custom-button',
    enable: false,
    isStartIcon: true,
    startIcon: 'mock-icon.png',
  };

  const { getByText } = render(<ButtonComp {...mockData} />);
  const buttonElement = getByText(mockData.label);

  // Simulate button click
  fireEvent.click(buttonElement);

  // Check if the onNavChange prop is NOT called
});
