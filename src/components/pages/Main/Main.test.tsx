import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Main';

jest.mock('./../../../api/api', () => ({
    getNewCashKickContracts: jest.fn(() => Promise.resolve([])),
    addNewCashKick: jest.fn(() => Promise.resolve({ success: true })),
    getPayments: jest.fn(() => Promise.resolve([])),
    getContracts: jest.fn(() => Promise.resolve([])),
    getCashKicks: jest.fn(() => Promise.resolve([]))
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Main Component', () => {

    it('navigates to /cash-acceleration when "Cash Accleration" is clicked', () => {
        const mockNavigate = jest.fn();
        require('react-router-dom').useNavigate.mockImplementation(() => mockNavigate);

        const { getByText } = render(
            <Router>
                <Main />
            </Router>
        );

        fireEvent.click(getByText('Cash Accleration'));

        expect(mockNavigate).toHaveBeenCalledWith('/cash-acceleration');
    });

    it('navigates to /cash-acceleration when "Home" is clicked', () => {
        const mockNavigate = jest.fn();
        require('react-router-dom').useNavigate.mockImplementation(() => mockNavigate);

        const { getByText } = render(
            <Router>
                <Main />
            </Router>
        );

        fireEvent.click(getByText('Home'));

        expect(mockNavigate).toHaveBeenCalledWith('/home');
    });
});

