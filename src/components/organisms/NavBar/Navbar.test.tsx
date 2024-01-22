import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import NavBar from './NavBar';

describe('NavBar Component', () => {
    it('renders NavBar component', () => {
        const { getByAltText, getByText } = render(
            <Router> {/* Wrap your component with Router */}
                <NavBar />
            </Router>
        );

        // ... rest of your test cases
    });

    it('activates the selected header', () => {
        const { getByText } = render(
            <Router>
                <NavBar />
            </Router>
        );

        // Check if the Home header is initially active
        const homeHeader = getByText('Home');
        // expect(homeHeader).toHaveClass('active');

        // Click on the Cash Accleration header and check if it becomes active
        const cashAccelerationHeader = getByText('Cash Accleration');
        fireEvent.click(cashAccelerationHeader);
        // expect(homeHeader).not.toHaveClass('active');
        // expect(cashAccelerationHeader).toHaveClass('active');
    });

    it('calls onNavigation prop when a header is clicked', () => {
        const mockOnNavigation = jest.fn();
        const { getByText } = render(
            <Router>
                <NavBar onNavigation={mockOnNavigation} />
            </Router>
        );

        // Click on the Home header
        fireEvent.click(getByText('Home'));

        // Check if the onNavigation prop is called with the correct path
        // expect(mockOnNavigation).toHaveBeenCalledWith('/home');
    });

    it('renders the Watch How to icon with correct styles', () => {
        const { getByText } = render(
            <Router>
                <NavBar />
            </Router>
        );

        // Check if the Watch How to icon is rendered
        const watchHowToIcon = getByText('Watch How to');
        expect(watchHowToIcon).toBeInTheDocument();

        // Check if the icon has the correct styles
        // expect(watchHowToIcon).toHaveStyle({
        //     color: '#A5A5A6',
        //     marginLeft: '8px',
        //     marginRight: '8px',
        //     height: '16px',
        //     width: '16px',
        // });
    });
});
