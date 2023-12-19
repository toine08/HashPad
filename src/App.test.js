import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title from <Hasher/> Components', () => {
  render(<App />);
  const titleFromHasher = screen.getByText(/MD5 Hash Generator/i);
  expect(titleFromHasher).toBeInTheDocument();
});
