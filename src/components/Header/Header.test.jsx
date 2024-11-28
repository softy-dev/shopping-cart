import { describe, it, expect } from 'vitest';
import { within, render, screen } from '@testing-library/react';
import Header from './Header';
import styles from './Header.module.css';

describe('Header component', () => {
  it('Renders the heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Renders correct text content in the heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading').textContent).toMatch(/Aura.Avenue/i);
  });

  it('Renders the primary navigation list', () => {
    render(<Header />);
    expect(screen.getByLabelText('primary-navigation')).toBeInTheDocument();
  });

  it('Renders items in the correct order in the primary navigation list', () => {
    render(<Header />);
    const primaryNav = screen.getByLabelText('primary-navigation');
    const items = within(primaryNav).getAllByRole('listitem');
    const itemsArray = items.map((item) => item.textContent);
    expect(itemsArray).toEqual([
      'HOME',
      'SHOP',
      'ABOUT',
      'NEWS & UPDATE',
      'CONTACT',
    ]);
  });

  it('The primary navigation list only has one active item at a time', () => {
    render(<Header />);
    const primaryNav = screen.getByLabelText('primary-navigation');
    const links = within(primaryNav).getAllByRole('link');
    const activeLinks = links.filter((link) =>
      link.classList.contains(styles.active)
    );

    expect(activeLinks.length).toBe(1);
  });

  it('Renders the user navigation list', () => {
    render(<Header />);
    expect(screen.getByLabelText('user-navigation')).toBeInTheDocument();
  });

  it('Renders items (icons) in the correct order in the user navigation list', () => {
    render(<Header />);
    const userNav = screen.getByLabelText('user-navigation');
    const items = within(userNav).getAllByRole('listitem');

    const altAttributes = items.map((item) => {
      const img = within(item).getByRole('img');
      return img.alt;
    });

    expect(altAttributes).toEqual(['Shopping Cart', 'Login']);
  });
});
