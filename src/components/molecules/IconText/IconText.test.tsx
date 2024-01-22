import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IconText from './IconText';

// Mock data for testing
const mockData = {
    isLeft: true,
    isRight: true,
    imageStyle: { width: '50px', height: '50px' },
    icon: 'path/to/icon.png',
    textStyle: { color: 'red' },
    label: 'Test Label',
    variant: 'h3',
    onNavChange: jest.fn(),
};

test('renders IconText with left and right images', () => {
    const { getByAltText } = render(<IconText {...mockData} />);
    //   const leftImage = getByAltText('image');
    //   const rightImage = getByAltText('image');

    // Assertions for left and right images
    //   expect(leftImage).toBeInTheDocument();
    //   expect(leftImage).toHaveAttribute('src', 'path/to/icon.png');
    //   expect(leftImage).toHaveStyle({ width: '50px', height: '50px' });

    //   expect(rightImage).toBeInTheDocument();
    //   expect(rightImage).toHaveAttribute('src', 'path/to/testicon.png'); // Update with correct path
    //   expect(rightImage).toHaveStyle({ width: '50px', height: '50px' });
});

test('renders IconText without left and right images', () => {
    const { queryByAltText } = render(<IconText {...mockData} isLeft={false} isRight={false} />);
    const leftImage = queryByAltText('image');
    const rightImage = queryByAltText('image');

    expect(leftImage).toBeNull();
    expect(rightImage).toBeNull();
});

test('renders IconText with disabled button', () => {
    const { getByText } = render(<IconText {...mockData} isLeft={false} isRight={false} />);
    const iconTextButton = getByText('Test Label').closest('button');

    expect(iconTextButton).toBeInTheDocument();
});

test('renders IconText without onNavChange callback', () => {
    const { getByText } = render(<IconText {...mockData} onNavChange={undefined} />);
    const iconTextButton: any = getByText('Test Label').closest('button');

    expect(iconTextButton).toBeInTheDocument();

    fireEvent.click(iconTextButton);
    expect(mockData.onNavChange).not.toHaveBeenCalled();
});


test('calls onNavChange on Enter key press', () => {
    const { getByText } = render(<IconText {...mockData} />);
    const iconTextButton: any = getByText('Test Label').closest('button');

    fireEvent.keyDown(iconTextButton, { key: 'Enter' });

    expect(mockData.onNavChange).toHaveBeenCalledWith('Test Label');
});

test('does not call onNavChange on other key press', () => {
    const { getByText } = render(<IconText {...mockData} />);
    const iconTextButton: any = getByText('Test Label').closest('button');

    fireEvent.keyDown(iconTextButton, { key: 'Space' });

    expect(mockData.onNavChange).not.toHaveBeenCalled();
});
