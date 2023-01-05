import React from 'react';
import Link, { calculateSvgBox } from './Link';
import { render, screen } from '@testing-library/react';

describe('calculateSvgBox', () => {
  test('Gives retangular dimensions given two points', () => {
    const result = calculateSvgBox(400, 500, 550, 700);
    expect(result.width).toBe(150);
    expect(result.height).toBe(200);
    expect(result.left).toBe(400);
    expect(result.top).toBe(500);
  });
});

describe('Link', () => {
  test('Renders with proper coordinates', () => {
    const startX = 100;
    const startY = 100;
    const endX = 300;
    const endY = 200;
    const expectedWidth = 200;
    const expectedHeight = 100;

    render(
      <Link
        startX={startX}
        startY={startY}
        endX={endX}
        endY={endY}
        testid={'samba!'}
      />
    );

    expect(screen.getByTestId('samba!').classList.contains('Link')).toBe(true);

    const linkSvg = screen.getByTestId('samba!').style;

    expect(linkSvg.top).toBe(`${startY}px`);
    expect(linkSvg.left).toBe(`${startX}px`);
    expect(linkSvg.width).toBe(`${expectedWidth}px`);
    expect(linkSvg.height).toBe(`${expectedHeight}px`);
  });

  test('Renders with crossed points', () => {
    // The endX is leftmost, startX is right most → crossed
    const startX = 500;
    const startY = 300;
    const endX = 300;
    const endY = 200;
    const expectedWidth = 200;
    const expectedHeight = 100;

    render(
      <Link
        startX={startX}
        startY={startY}
        endX={endX}
        endY={endY}
        testid={'samba!'}
      />
    );

    expect(screen.getByTestId('samba!').classList.contains('Link')).toBe(true);

    const linkSvg = screen.getByTestId('samba!').style;

    expect(linkSvg.top).toBe(`${endY}px`);
    expect(linkSvg.left).toBe(`${endX}px`);
    expect(linkSvg.width).toBe(`${expectedWidth}px`);
    expect(linkSvg.height).toBe(`${expectedHeight}px`);
  });
});
