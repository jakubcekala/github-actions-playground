import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello, GitHub Actions!'
    );
  });
});
