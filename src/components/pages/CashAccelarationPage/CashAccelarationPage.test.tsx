import React from 'react';
import { render, screen } from '@testing-library/react';
import CashAccelarationPage from './CashAccelarationPage';

// Mock any dependencies if needed
jest.mock('../../Templates/CashAccelaration/CashAccelerationComp', () => () => <div data-testid="mocked-cash-acceleration-comp" />);

describe('CashAccelarationPage', () => {
  it('renders CashAccelerationComp', () => {
    render(<CashAccelarationPage />);

    // Check if CashAccelerationComp is rendered
    expect(screen.getByTestId('mocked-cash-acceleration-comp')).toBeInTheDocument();

    // Add more assertions if needed
  });
});
