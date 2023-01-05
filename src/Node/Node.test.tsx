import React from 'react';
import Node from './Node';
import { render, screen } from '@testing-library/react';

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
