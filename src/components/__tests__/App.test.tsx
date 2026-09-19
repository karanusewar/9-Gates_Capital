import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('renders the 9GATES branding in the navigation', () => {
    render(<App />);
    const navBrand = screen.getAllByText('9GATES');
    expect(navBrand.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the Hero section heading', () => {
    render(<App />);
    expect(screen.getByText(/Transforming Vision/i)).toBeInTheDocument();
  });
});
