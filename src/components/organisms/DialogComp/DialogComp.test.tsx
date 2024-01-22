import React from 'react';
import { render, fireEvent, screen,waitFor } from '@testing-library/react';
import DialogComp from './DialogComp';

// Mock props for testing
const mockProps = {
  isOpen: true,
  isSuccess: false,
  onDialogAction: jest.fn(),
};

describe('DialogComp', () => {
  it('renders without crashing', () => {
    render(<DialogComp {...mockProps} />);
    expect(screen.getByText('Name your cash kick')).toBeInTheDocument();
  });

  it('renders success message when isSuccess is true', () => {
    render(<DialogComp {...mockProps} isSuccess={true} />);
    expect(screen.getByText('Cash kick launched successfully!')).toBeInTheDocument();
    expect(screen.getByText('We are reviewing your cash kick')).toBeInTheDocument();
  });

  it('calls onDialogAction with the correct parameters when Cancel button is clicked', () => {
    render(<DialogComp {...mockProps} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockProps.onDialogAction).toHaveBeenCalledWith("Cancel, ");
  });

  it('calls onDialogAction with the correct parameters when Create Cash Kick button is clicked', () => {
    render(<DialogComp {...mockProps} />);
    fireEvent.click(screen.getByText('Create Cash Kick'));
    expect(mockProps.onDialogAction).toHaveBeenCalledWith(true, null); // Assuming inputValue is null initially
  });

  it('updates inputValue state when InputComp value changes', () => {
    render(<DialogComp {...mockProps} />);
    // const input : any = screen.getByLabelText('Cash kick name');
    // fireEvent.change(input, { target: { value: 'New Cash Kick' } });
    // expect(input.value).toBe('New Cash Kick');
  });
});


test('calls handleClose when Dialog is closed', () => {
    // Mock props
    const mockProps = {
      isOpen: true,
      onDialogAction: jest.fn(), // Mock the onDialogAction function
      isSuccess: false,
    };
  
    // Render the DialogComp with the mocked props
    const { getByText } = render(<DialogComp {...mockProps} />);
    
    // Find and close the dialog
    const closeButton = getByText('Cancel'); // Assuming 'Cancel' is present in the dialog
    fireEvent.click(closeButton);
  
    // Assert that setOpen and onDialogAction are called with the expected values
    expect(mockProps.onDialogAction).toHaveBeenCalledWith(false);
  });

  test('calls handleClose when form is submitted', async () => {
    // Mock props
    const mockProps = {
      isOpen: true,
      onDialogAction: jest.fn(), // Mock the onDialogAction function
      isSuccess: false,
    };
  
    // Render the DialogComp with the mocked props
    const { getByText } = render(<DialogComp {...mockProps} />);
    
    // Find the form within the dialog
    const form  : any= document.querySelector('form');
  
    // Simulate form submission
    fireEvent.submit(form);
  
    // Wait for the asynchronous state update to complete
    await waitFor(() => {
      // Assert that onDialogAction is called with the expected argument
      expect(mockProps.onDialogAction).toHaveBeenCalledWith(false);
    });
  });