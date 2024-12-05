import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Categories from './Categories';

describe('Categories component', () => {
  it('Matches the snapshot', () => {
    const { asFragment } = render(<Categories />);
    expect(asFragment()).toMatchSnapshot();
  });
});
