import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxComp from './CheckboxComp';

describe('CheckboxComp', () => {
  test('renders checkbox with default styles', () => {
    render(<CheckboxComp />);
    
    // Check if the checkbox is rendered with default styles
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toHaveStyle({ color: 'rgb(165, 165, 166)' });
  });

  test('renders checkbox with custom styles', () => {
    render(<CheckboxComp isMargin />);
    
    // Check if the checkbox is rendered with custom styles
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toHaveStyle({ marginLeft: '15px', marginTop: '7px' });
  });

  test('changes the state on click', () => {
    render(<CheckboxComp />);
    
    // Check if the checkbox is unchecked initially
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toBeChecked();

    // Simulate a click event
    fireEvent.click(checkboxElement);

    // Check if the checkbox is checked after click
    expect(checkboxElement).toBeChecked();
  });

  test('applies custom styles when checked', () => {
    render(<CheckboxComp />);
    
    // Check if the checkbox is unchecked initially
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toHaveStyle({ backgroundColor: 'red', fill: 'red', color: '#B4A9FF !important' });

    // Simulate a click event
    fireEvent.click(checkboxElement);

    // Check if the checkbox is checked with custom styles
    expect(checkboxElement).toHaveStyle({ backgroundColor: 'red', fill: 'red', color: '' });
  });
});
