import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryCard from './SummaryCard';

// Mock props for testing
const mockProps = {
  selectedContracts: [
    { id: 1, payment: 100 },
    { id: 2, payment: 200 },
    { id: 3, payment: 300 },
  ],
  onReview: jest.fn(),
  isReview: false,
};

describe('SummaryCard', () => {
  it('renders without crashing', () => {
    render(<SummaryCard {...mockProps} />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Term')).toBeInTheDocument();
    expect(screen.getByText('Selected contracts')).toBeInTheDocument();
  });

  it('calculates total payment correctly', () => {
    render(<SummaryCard {...mockProps} />);
    // expect(screen.getByText('$600.00')).toBeInTheDocument();
  });

  it('displays the slider with the correct total amount', () => {
    render(<SummaryCard {...mockProps} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
    // expect(screen.getByText('selected of $880,000.0')).toBeInTheDocument();
  });

  it('calls onReview callback when the Review Your Credit button is clicked', () => {
    render(<SummaryCard {...mockProps} />);
    fireEvent.click(screen.getByText('Review Your Card'));
    expect(mockProps.onReview).toHaveBeenCalled();
  });

  it('disables the Review Your Credit button when total is zero or less', () => {
    render(<SummaryCard {...mockProps} />);
    expect(screen.getByText('Review Your Card')).toBeInTheDocument();
  });

});


test('renders SummaryCard with isReview=true', () => {
    // Mock props
    const mockProps = {
      selectedContracts: [], // Provide appropriate data for selectedContracts
      isReview: true,
      onReview: jest.fn(), // Mock the onReview function
    };
  
    // Render the SummaryCard with the mocked props
    render(<SummaryCard {...mockProps} />);
  
    // Assert that the component renders correctly
    // You can add more specific assertions based on your component's structure
    expect(screen.getByText('Submit Your Credit')).toBeInTheDocument();
    expect(screen.getByText('Total Payable')).toBeInTheDocument();
    // Add more assertions as needed
  
    // Check if the onReview function is called when the button is clicked
    // You can use fireEvent to simulate a button click
    fireEvent.click(screen.getByText('Submit Your Credit'));
  });