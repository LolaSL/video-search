// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  
  // Check if the Navbar text is present
  const navbarElement = screen.getByText(/Video Search/i);
  expect(navbarElement).toBeInTheDocument();

  // Check if the VideoSearch component is present
  const videoSearchElement = screen.getByText(/Video Search/i);
  expect(videoSearchElement).toBeInTheDocument();
});a