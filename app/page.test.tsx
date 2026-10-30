import { render, screen } from '@testing-library/react';
import Home from './page';
import { isFeatureEnabled } from '@/lib/flagsmith';

jest.mock('@/lib/flagsmith', () => ({
  isFeatureEnabled: jest.fn().mockResolvedValue(false),
}));

const mockedIsFeatureEnabled = isFeatureEnabled as jest.Mock;

describe('Home page', () => {
  it('renders the heading', async () => {
    render(await Home());
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello, GitHub Actions!'
    );
    expect(screen.queryByText(/beta_banner/)).not.toBeInTheDocument();
  });

  it('shows the beta banner when the flag is enabled', async () => {
    mockedIsFeatureEnabled.mockResolvedValue(true);
    render(await Home());
    expect(screen.getByText(/beta_banner/)).toBeInTheDocument();
  });
});
