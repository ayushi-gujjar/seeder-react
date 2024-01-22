import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';


// describe('HomePage Component', () => {
//   it('renders without crashing', () => {
//     render(<HomePage />);

//     // Assert that the component renders successfully
//     // expect(screen.getByText('Congratulations you are ready to start!')).toBeInTheDocument();
//     // You can add more assertions based on the content of your HomePage component
//   });

//   // Add more test cases as needed
// });


describe('Home Component', () => {
    it('renders without crashing', () => {
      render(
        <Router>
          <HomePage />
        </Router>
      );
  
      // Assert that the component renders successfully
    //   expect(screen.getByText('Your Contracts')).toBeInTheDocument();
      // You can add more assertions based on the content of your NewCashkick component
    });
  
    // Add more test cases as needed
  });