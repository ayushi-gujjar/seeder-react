import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonComp from './ButtonComp';

describe('ButtonComp', () => {
  test('renders button with label', () => {
    render(<ButtonComp label="Click me" color="primary" variant="contained" class="custom-class" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the correct color and variant', () => {
    render(<ButtonComp label="Submit" color="primary" variant="contained" class="custom-class" />);
    const buttonElement = screen.getByText('Submit');

    // Check the color and variant classes
    expect(buttonElement).toHaveClass('MuiButton-containedPrimary');
  });

  test('applies additional class when enable is false', () => {
    render(<ButtonComp label="Click me" color="primary" variant="contained" class="custom-class" enable={true} />);
    const buttonElement = screen.getByText('Click me');

    // Check if the 'disable' class is applied
    expect(buttonElement).toHaveClass('disable');
  });

  // test('calls onClick function when clicked', () => {
  //   const onClickMock = jest.fn();
  //   render(<ButtonComp label="Click me" color="primary" variant="contained" class="custom-class" onClick={onClickMock} />);
  //   const buttonElement = screen.getByText('Click me');

  //   // Simulate a click event
  //   userEvent.click(buttonElement);

  //   // Check if the onClick function is called
  //   expect(onClickMock).toHaveBeenCalled();
  // });

  test('is disabled when enable is true', () => {
    render(<ButtonComp label="Click me" color="primary" variant="contained" class="custom-class" enable={true} />);
    const buttonElement = screen.getByText('Click me');

    // Check if the button is disabled
    expect(buttonElement).toBeDisabled();
  });
});
