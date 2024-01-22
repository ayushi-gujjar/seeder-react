import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewCashkickPage from './NewCashkick';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NewCashkickPage Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <NewCashkickPage />
      </Router>
    );

    // Assert that the component renders successfully
    expect(screen.getByText('Your Contracts')).toBeInTheDocument();
    // You can add more assertions based on the content of your NewCashkick component
  });

  // Add more test cases as needed
});

describe('NewCashkickPage', () => {
  it('renders NewCashkick component', () => {
    const { getByTestId } = render(<NewCashkickPage />);
    
    // Assuming you have a data-testid attribute on the NewCashkick component
    const newCashkickComponent = getByTestId('new-cashkick-component');
    
    // Ensure that the NewCashkick component is present in the rendered output
    expect(newCashkickComponent).toBeInTheDocument();
  });
});