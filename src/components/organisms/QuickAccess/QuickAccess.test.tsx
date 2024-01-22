import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuickAccess from './QuickAccess';
import { useNavigate } from 'react-router-dom';
// Mock data for testing
const mockData = {};

// Helper function to render QuickAccess component with mock data
const renderQuickAccess = (props = mockData) => {
    return render(<QuickAccess {...props} />);
};

// Mock useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
;

test('calls navigate with correct route onNewCashKick', () => {
    const { getByRole } = renderQuickAccess();

    // Mock the navigate function
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    // Find and click the "New Cash Kick" button
    const newCashKickButton = getByRole('button', { name: 'New Cash Kick' });
    fireEvent.click(newCashKickButton);

    // Check if navigate is called with the correct route
    expect(navigateMock).toHaveBeenCalledWith('/newcashkick');
});

test('renders QuickAccess with provided props', () => {
    const { getByText, getByRole } = renderQuickAccess(mockData);

    // Assertions for text content
    const launchHeading = getByText('Launch a new Cash Kick');
    // const availabilityText = getByText('You have upto $709,546.00 available for a new cash advance');

    // Assertions for ButtonComp
    const newCashKickButton = getByRole('button', { name: 'New Cash Kick' });

    // Check if components are rendered
    expect(launchHeading).toBeInTheDocument();
    // expect(availabilityText).toBeInTheDocument();
    expect(newCashKickButton).toBeInTheDocument();

    // Simulate click on the "New Cash Kick" button
    fireEvent.click(newCashKickButton);

    // You can add more assertions based on your specific component structure and styling
});

// Add more test cases to cover different scenarios and edge cases.
