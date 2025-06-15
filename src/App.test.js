import { render, screen } from '@testing-library/react';
import App from './App';

test('shows initial next player status', () => {
  render(<App />);
  const statusElement = screen.getByText(/next player: x/i);
  expect(statusElement).toBeInTheDocument();
});
