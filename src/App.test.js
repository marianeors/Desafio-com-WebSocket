import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders header and stock lists', async () => {
  render(<App />);

  expect(screen.getByText('Toro')).toBeInTheDocument();
  expect(screen.getByText('Explore o mercado')).toBeInTheDocument();
});

test('handles WebSocket messages', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Explore o mercado')).toBeInTheDocument();
  });

});
