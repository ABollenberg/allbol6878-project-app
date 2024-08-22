import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Randomize Number button works correctly', () => {
  render(<Button />);
  fireEvent.click(screen.getByText(/Randomize Number/i));
  const numberElement = screen.getByText(/Random Number:/i);
  expect(numberElement).toBeInTheDocument();
});

test('Randomize State button works correctly', () => {
  render(<Button />);
  fireEvent.click(screen.getByText(/Randomize State/i));
  const stateElement = screen.getByText(/Random State:/i);
  expect(stateElement).toBeInTheDocument();
});

test('Randomize Genre button works correctly', () => {
  render(<Button />);
  fireEvent.click(screen.getByText(/Randomize Genre/i));
  const genreElement = screen.getByText(/Random Genre:/i);
  expect(genreElement).toBeInTheDocument();
});
