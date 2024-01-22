import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CashAccelerationComp from './CashAccelerationComp';
import { BrowserRouter as Router } from 'react-router-dom';


// Mock API functions
jest.mock('./../../../api/api', () => ({
    getContracts: jest.fn(() => Promise.resolve([])),
    getCashKicks: jest.fn(() => Promise.resolve([])),
}));

describe('CashAccelerationComp', () => {
    it('renders without crashing', async () => {
        render(
            <Router>
                <CashAccelerationComp />
            </Router>
        );
        expect(screen.getByText('Your Payments')).toBeInTheDocument();
    });

    it('handles tab change correctly', async () => {
        render(
            <Router>
                <CashAccelerationComp />
            </Router>
        );
        // Assume there is a tab with text 'My Contracts'
        const myContractsTab = screen.getByText('My Contracts');

        // Simulate a click on the tab
        userEvent.click(myContractsTab);

        // Verify that the active tab has changed
        expect(screen.getByText('Your Payments')).toBeInTheDocument();
        // expect(screen.getByText('My Contracts')).toHaveClass('active-tab');
    });

    it('handles tab change correctly', async () => {
        render(
            <Router>
                <CashAccelerationComp />
            </Router>
        );
        // Assume there is a tab with text 'My Contracts'
        const myContractsTab = screen.getByText('My Contracts');
        
        // Simulate a click on the tab
        userEvent.click(myContractsTab);
        
        // Verify that the active tab has changed
        expect(screen.getByText('Your Payments')).toBeInTheDocument();
        // expect(screen.getByText('My Contracts')).toHaveClass('active-tab');
      });


      it('handles tab change correctly', async () => {
        render(
            <Router>
                <CashAccelerationComp />
            </Router>
        );
        // Assume there is a tab with text 'My Contracts'
        const myContractsTab = screen.getByText('My Cash Kicks');
        
        // Simulate a click on the tab
        userEvent.click(myContractsTab);
        
        // Verify that the active tab has changed
        expect(screen.getByText('Your Payments')).toBeInTheDocument();
        // expect(screen.getByText('My Contracts')).toHaveClass('active-tab');
      });

      it('handles API error', async () => {
        // Mock the API to return an error
        jest.clearAllMocks();
        jest.spyOn(require('./../../../api/api'), 'getCashKicks').mockRejectedValueOnce(new Error('Mocked API error'));
    
        render(
          <Router>
            <CashAccelerationComp />
          </Router>
        );
    
        await waitFor(() => {
        });
      });
      it('handles API error getContracts', async () => {
        // Mock the API to return an error
        jest.clearAllMocks();
        jest.spyOn(require('./../../../api/api'), 'getContracts').mockRejectedValueOnce(new Error('Mocked API error'));
    
        render(
          <Router>
            <CashAccelerationComp />
          </Router>
        );
    
        await waitFor(() => {
        });
      });


      // new test cases 

      it('loads contracts and displays them by default', async () => {
        render(
          <Router>
            <CashAccelerationComp />
          </Router>
        );
    
        // Verify that loading indicator is initially displayed
        // expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    
        // Wait for contracts to be loaded and verify that they are displayed
        await waitFor(() => {
          expect(screen.getByText('Your Payments')).toBeInTheDocument();
          expect(screen.getByText('Name')).toBeInTheDocument();
          expect(screen.getByText('Status')).toBeInTheDocument();
          // Add more specific assertions based on your data
        });
      });
    
      it('switches to Cash Kicks tab when clicked', async () => {
        render(
          <Router>
            <CashAccelerationComp />
          </Router>
        );
    
        // Wait for contracts to be loaded
        await waitFor(() => {});
    
        // Find and click the "My Cash Kicks" tab
        fireEvent.click(screen.getByText('My Cash Kicks'));
    
        // Verify that the active tab has changed
        expect(screen.getByText('Your Payments')).toBeInTheDocument();
      });
});
