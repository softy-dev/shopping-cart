import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel component', () => {
  vi.mock('./Carousel.module.css', () => ({
    default: {
      'visible-text': 'visible-text',
      'invisible-text': 'invisible-text',
      'visible-img': 'visible-img',
      'invisible-img': 'invisible-img',
    },
  }));

  vi.mock('../../assets/picture.jpg', () => ({
    default: '/mocked-image.jpg',
  }));

  vi.mock('../../assets/picture2.jpg', () => ({
    default: '/mocked-image2.jpg',
  }));

  vi.mock('../../assets/picture3.jpg', () => ({
    default: '/mocked-image3.jpg',
  }));

  it('Renders all headings', () => {
    render(<Carousel />);
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
  });

  it('Renders all buttons', () => {
    render(<Carousel />);
    const buttons = screen.getAllByRole('button', { name: /find out more/i });
    expect(buttons).toHaveLength(3);
  });

  it('Renders all images with correct sources', () => {
    render(<Carousel />);
    const images = screen.getAllByRole('presentation');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('src', '/mocked-image.jpg');
    expect(images[1]).toHaveAttribute('src', '/mocked-image2.jpg');
    expect(images[2]).toHaveAttribute('src', '/mocked-image3.jpg');
  });

  it('Sets the active slide correctly on mount', () => {
    render(<Carousel />);
    const heading = screen.getByText('BE A CHERRY ON PIE IN ANY SITUATION');
    const textWrapperDiv = heading.closest('div');
    expect(textWrapperDiv).toHaveClass('visible-text');
  });

  it('Changes active slide after a delay', () => {
    vi.useFakeTimers();
    render(<Carousel />);
    const heading1 = screen.getByText('BE A CHERRY ON PIE IN ANY SITUATION');
    const textWrapperDiv1 = heading1.closest('div');
    expect(textWrapperDiv1).toHaveClass('visible-text');

    act(() => {
      vi.advanceTimersByTime(9000);
    });

    const heading2 = screen.getByText('ADD SOME CHIC TO YOUR LOOK');
    const textWrapperDiv2 = heading2.closest('div');
    expect(textWrapperDiv2).toHaveClass('visible-text');
    expect(textWrapperDiv1).toHaveClass('invisible-text');

    vi.useRealTimers();
  });

  it('Clears the interval on component unmount', () => {
    vi.useFakeTimers();

    const { unmount } = render(<Carousel />);
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  vi.useRealTimers();
});
