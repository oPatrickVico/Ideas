import React from 'react';
import Node, { isWithinInterval } from './Node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Node', () => {
  it('Renders with origin in the middle of itself', async () => {
    const givenX = 650;
    const givenY = 750;
    const resultLeft = 400; // givenX - width / 2, given width = 500
    const resultTop = 500; // givenY - height / 2, given height = 500

    render(<Node originX={givenX} originY={givenY} testid={'some-id-luls'} />);

    const nodeStyle = screen.getByTestId('some-id-luls').style;
    expect(nodeStyle.left).toBe(`${resultLeft}px`);
    expect(nodeStyle.top).toBe(`${resultTop}px`);
  });
});

describe('isWithinInterval', () => {
  it('breaks if values are the same', () => {
    // To test for intentional error catching,
    // you have to mock the function call.
    // Otherwise, jest thinks the error was unexpected,
    const mockInterval = jest.fn(() => isWithinInterval([0, 0], 1));
    expect(mockInterval).toThrowError();
  });

  it('asserts if it is within the boundary correctly', () => {
    expect(isWithinInterval([0, 2], 1)).toBe(true);
    expect(isWithinInterval([-3, -1], -2)).toBe(true);
    expect(isWithinInterval([5, 3], 2)).toBe(false);
    expect(isWithinInterval([-2, 2], 3)).toBe(false);
  });
});
