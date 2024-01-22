import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByText('Good afternoon ✋')).toBeInTheDocument();
    expect(screen.getByText('April 02, 2021')).toBeInTheDocument();
  });

  it('renders the images correctly', () => {
    render(<Header />);
    expect(screen.getByAltText('percentage')).toHaveAttribute('src', /avatar\.png/);
    expect(screen.getAllByAltText('percentage')[1]).toHaveAttribute('src', /arrow-bottom\.png/);
  });

  it('renders with the correct styles', () => {
    render(<Header />);
    const paperElement = screen.getByRole('presentation');
    expect(paperElement).toHaveStyle('width: 100%');
    expect(paperElement).toHaveStyle('margin-bottom: 10px');
    expect(paperElement).toHaveStyle('box-shadow: none');
    expect(paperElement).toHaveStyle('background-color: transparent');
    expect(paperElement).toHaveStyle('margin-top: 20px');
  });

  it('renders the date and time correctly', () => {
    render(<Header />);
    const dateElement = screen.getByText('April 02, 2021');
    expect(dateElement).toHaveStyle('color: #A5A5A6');
    const timeElement = screen.getByText('Good afternoon ✋');
    expect(timeElement).toHaveStyle('color: #E8E7F0');
  });

  it('displays images with the correct dimensions', () => {
    render(<Header />);
    const avatarImage = screen.getByAltText('percentage');
    expect(avatarImage).toHaveStyle('height: 32px');
    expect(avatarImage).toHaveStyle('width: 32px');

    const arrowImage = screen.getAllByAltText('percentage')[1];
    expect(arrowImage).toHaveStyle('height: 16px');
    expect(arrowImage).toHaveStyle('width: 16px');
    expect(arrowImage).toHaveStyle('margin-top: 6px');
    expect(arrowImage).toHaveStyle('margin-left: 3px');
  });
});
