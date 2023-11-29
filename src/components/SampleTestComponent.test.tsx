import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SampleTestComponent from './SampleTestComponent';

describe('Sample Component', () => {
  it('renders without crashing', () => {
    render(<SampleTestComponent />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Movie Night');
  });
});
