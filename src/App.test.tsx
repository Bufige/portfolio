import { render, screen } from '@testing-library/react';
import App from './App';

test('renders neon operator identity', () => {
  render(<App />);
  expect(screen.getByText(/BUFIGE/i)).toBeInTheDocument();
  expect(screen.getByText(/FullStack Developer/i)).toBeInTheDocument();
});
