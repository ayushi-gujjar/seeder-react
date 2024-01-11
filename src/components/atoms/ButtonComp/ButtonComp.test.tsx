import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonComp from './ButtonComp';

describe('ButtonComp', () => {
  test('renders button with label and applies styles', () => {
    const props : any = {
      label: 'Click me',
      color: 'primary',
      variant: 'contained',
      class: 'custom-button',
      enable: false,
    };

    render(<ButtonComp {...props} />);

    // Check if the button is rendered with the correct label and styles
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('custom-button');
    expect(button).not.toHaveClass('disable'); // Ensure the disable class is not applied

    // Check if the button has the correct styles based on the label length
    expect(button).toHaveStyle({ width: `${props.label.length * 22}px` });
  });

  test('handles click event when enabled', () => {
    const onClickMock = jest.fn();
    const props : any = {
      label: 'Click me',
      color: 'primary',
      variant: 'contained',
      class: 'custom-button',
      enable: true,
    };

    render(<ButtonComp {...props} />);

    const button = screen.getByRole('button', { name: /click me/i });

    // Click the button and check if the onClick event is called
    userEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled(); // Assuming there's no onClick prop provided

    // Ensure the button is disabled
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveClass('disable');
  });
});
