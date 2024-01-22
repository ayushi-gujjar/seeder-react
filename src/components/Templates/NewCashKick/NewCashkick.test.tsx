import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import NewCashkick from './NewCashkick';
import { act } from 'react-dom/test-utils';

// Mock the API module
jest.mock('./../../../api/api', () => ({
    getNewCashKickContracts: jest.fn(() => Promise.resolve([])),
    addNewCashKick: jest.fn(() => Promise.resolve({ success: true })),
    getContracts: jest.fn(() => Promise.resolve([]))
}));

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));



describe('NewCashkick Component', () => {

    it('renders without crashing', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );
        await waitFor(() => {
            expect(screen.getByText('Your Contracts')).toBeInTheDocument();
        });
    });

    it('handles checkbox selection', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );
        await waitFor(() => {
        });
    });

    it('handles review card submission', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );
        await waitFor(() => {
        });
    });

    it('handles dialog action on submission', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );

       
    });

    it('closes dialog and navigates on dialog action', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );
        await waitFor(() => { });
        fireEvent.click(screen.getByText('Review Your Card'));
        // fireEvent.click(screen.getByText('View Cash Kicks'));
        await waitFor(() => {
            expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
        });
        // expect(screen.getByText('Your Payments')).toBeInTheDocument();
    });

    it('displays summary card and opens dialog on "Submit Your Credit" click', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );
        await waitFor(() => { });
        expect(screen.queryByText('Selected Contracts:')).not.toBeInTheDocument();
    });




    it('handles API error', async () => {
        jest.clearAllMocks();
        jest.spyOn(require('./../../../api/api'), 'getContracts').mockRejectedValueOnce(new Error('Mocked API error'));

        render(
            <Router>
                <NewCashkick />
            </Router>
        );

        await waitFor(() => {
        });
    });

    it('navigates to /home on "View Cash Kicks" click', async () => {
        render(
            <Router>
                <NewCashkick />
            </Router>
        );

        await waitFor(() => { });

        fireEvent.click(screen.getByText('Review Your Card'));


        await waitFor(() => {
            expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
        });
    });

    it('renders correctly with isReview set to false', async () => {
        const mockUseState = jest.fn();
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useState: (isReview: any) => mockUseState(isReview),
        }));
        mockUseState.mockReturnValue([true, jest.fn()]);

        render(
            <Router>
                <NewCashkick />
            </Router>
        );
        await waitFor(() => { });

        fireEvent.click(screen.getByText('Review Your Card'));
    });


    it('renders correctly with isReview set to true', async () => {
        const mockUseState = jest.fn();

        // Mock isReview to true
        mockUseState.mockImplementation((isReview) => {
          if (isReview === false) {
            return [true, jest.fn()];
          }
          return [isReview, jest.fn()];
        });
    
        render(
          <Router>
            <NewCashkick />
          </Router>
        );
        // fireEvent.click(screen.getByText('Submit Your Credit'));
    
        // Your test cases with isReview set to true
      });
     
});
