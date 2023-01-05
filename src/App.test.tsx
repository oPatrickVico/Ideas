import React from 'react';
import App from './App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('App', () => {
  describe('Double-click creates a node', () => {
    test('New node gets rendered', async () => {
      render(<App />);

      // Find the main area
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();

      // User does their thing
      await user.dblClick(main);

      // Check if new node
      expect(screen.getByText(/some title/i)).toBeInTheDocument();
    });
  });
});
