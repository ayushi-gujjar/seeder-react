import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputComp from './InputComp';

// Mock data for testing
const mockData = {
  inputStyle: {},
  isStartAdornment: true,
  isEndAdornment: true,
  value: 'Enter text',
  startIcon: 'smile',
  endIcon: 'eye',
  inputChange: jest.fn(),
};

test('renders InputComp with correct props and handles input change', () => {
  const { getByPlaceholderText, getByAltText } = render(<InputComp {...mockData} />);
  const inputElement = getByPlaceholderText(mockData.value);
  const startIconElement = getByAltText('Custom Icon');
  const endIconElement = getByAltText('End Icon');

  expect(inputElement).toBeInTheDocument();
  expect(startIconElement).toBeInTheDocument();
  expect(endIconElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'new text' } });

  expect(mockData.inputChange).toHaveBeenCalledWith('new text');
});

test('renders InputComp without start and end adornments if isStartAdornment and isEndAdornment are false', () => {
  const { getByPlaceholderText, queryByAltText } = render(<InputComp {...mockData} isStartAdornment={false} isEndAdornment={false} />);
  const inputElement = getByPlaceholderText(mockData.value);
  const startIconElement = queryByAltText('Custom Icon');
  const endIconElement = queryByAltText('End Icon');

  expect(inputElement).toBeInTheDocument();
  expect(startIconElement).not.toBeInTheDocument();
  expect(endIconElement).not.toBeInTheDocument();
});

test('renders InputComp without start adornment if isStartAdornment is false', () => {
  const { getByPlaceholderText, queryByAltText,getByAltText } = render(<InputComp {...mockData} isStartAdornment={false} />);
  const inputElement = getByPlaceholderText(mockData.value);
  const startIconElement = queryByAltText('Custom Icon');
  const endIconElement = getByAltText('End Icon');

  expect(inputElement).toBeInTheDocument();
  expect(startIconElement).not.toBeInTheDocument();
  expect(endIconElement).toBeInTheDocument();
});

test('renders InputComp without end adornment if isEndAdornment is false', () => {
  const { getByPlaceholderText, queryByAltText,getByAltText } = render(<InputComp {...mockData} isEndAdornment={false} />);
  const inputElement = getByPlaceholderText(mockData.value);
  const startIconElement = getByAltText('Custom Icon');
  const endIconElement = queryByAltText('End Icon');

  expect(inputElement).toBeInTheDocument();
  expect(startIconElement).toBeInTheDocument();
  expect(endIconElement).not.toBeInTheDocument();
});

test('renders InputComp with custom input style', () => {
  const customStyle = { border: '2px solid red', borderRadius: '5px' };
  const { container } = render(<InputComp {...mockData} inputStyle={customStyle} />);
  const inputElement = container.querySelector('.input');

  expect(inputElement).toHaveStyle('border: 2px solid red; border-radius: 5px;');
});

// Add more test cases based on your component's behavior and requirements.
