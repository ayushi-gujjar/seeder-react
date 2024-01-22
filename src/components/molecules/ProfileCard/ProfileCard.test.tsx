import React from 'react';
import { render } from '@testing-library/react';
import ProfileCard from './ProfileCard';

test('renders ProfileCard with provided props', () => {
  const { getByAltText, getByText, getByRole } = render(<ProfileCard />);
  
  // Assertions for avatar image
  const avatarImage = getByAltText('percentage');
  expect(avatarImage).toBeInTheDocument();
  expect(avatarImage).toHaveStyle({ height: '40px', width: '40px' });

  // Assertions for user name and profile text
  const userNameElement = getByText('Kena Cooper');
//   const profileTextElement = getByText('Edit Profile');
  expect(userNameElement).toBeInTheDocument();
  expect(userNameElement).toHaveStyle({ color: '#E8E7F0' });
//   expect(profileTextElement).toBeInTheDocument();
//   expect(profileTextElement).toHaveStyle({ color: '#B4A9FF' });

  // Assertions for Manage Subscription and Help sections
  const manageSubscriptionElement = getByText('Manage Subscription');
  const helpElement = getByText('Help');
  expect(manageSubscriptionElement).toBeInTheDocument();
  expect(manageSubscriptionElement).toHaveStyle({ color: '#A5A5A6' });
  expect(helpElement).toBeInTheDocument();
  expect(helpElement).toHaveStyle({ color: '#A5A5A6' });

  // Assertions for IconText components
//   const settingsIconText = getByRole('button', { name: 'Settings' });
//   const logoutIconText = getByRole('button', { name: 'Log out' });
//   expect(settingsIconText).toBeInTheDocument();
//   expect(settingsIconText).toHaveStyle({ color: '#A5A5A6' });
//   expect(logoutIconText).toBeInTheDocument();
//   expect(logoutIconText).toHaveStyle({ color: '#EC977D' });

  // You can add more assertions based on your specific component structure and styling
});

// Add more test cases to cover different scenarios and edge cases.
