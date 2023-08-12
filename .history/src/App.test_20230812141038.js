// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  
  // Check if the Navbar text is present
  const navbarElement = getByText(/Video Search/i);
  expect(navbarElement).toBeInTheDocument();

  // Check if the VideoSearch component is present
  const videoSearchElement = getByText(/Video Search/i);
  expect(videoSearchElement).toBeInTheDocument();
});