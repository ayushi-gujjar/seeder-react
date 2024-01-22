import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

// Mock the API function with both success and error responses
jest.mock('./../../../api/api', () => ({
  getPayments: jest.fn((success = true) => {
    if (success) {
      return Promise.resolve(/* mock successful response */);
    } else {
      return Promise.reject(new Error('Mocked API error'));
    }
  }),
}));

describe('Home Component', () => {
  it('handles success', async () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // You might need to wait for the asynchronous operation to complete
    await waitFor(() => {
      // Assert that the component renders successfully
      expect(screen.getByText('Congratulations you are ready to start!')).toBeInTheDocument();
    });
  });

  it('handles API error', async () => {
    // Mock the API to return an error
    jest.clearAllMocks();
    jest.spyOn(require('./../../../api/api'), 'getPayments').mockRejectedValueOnce(new Error('Mocked API error'));

    render(
      <Router>
        <Home />
      </Router>
    );

    // You might need to wait for the asynchronous operation to complete
    await waitFor(() => {
      // Assert that the error message is displayed
    });
  });

  // Add more test cases as needed
});
