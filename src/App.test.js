import { render, screen } from '@testing-library/react';
import HebidaApp from './App';

test('renders learn react link', () => {
  render(<HebidaApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
