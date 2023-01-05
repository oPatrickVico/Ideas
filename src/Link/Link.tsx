import React from 'react';
import './Link.scss';

export type LinkProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  testid?: string;
};

export default function Link({
  startX,
  startY,
  endX,
  endY,
  testid,
}: LinkProps) {
  const boxDimensions = calculateSvgBox(startX, startY, endX, endY);

  return (
    <svg
      style={boxDimensions}
      className="Link"
      data-testid={testid ? testid : null}
    >
      <line
        x1="0"
        y1="0"
        x2="200"
        y2="200"
        style={{ stroke: 'rgb(255,0,0)', strokeWidth: 2 }}
      />
    </svg>
  );
}

export function calculateSvgBox(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const { abs, min, max } = Math;
  const width = abs(x1 - x2);
  const height = abs(y1 - y2);
  const top = max(min(y1, y2), 0); // the smaller between the points, but never negative
  const left = max(min(x1, x2), 0);

  // @dryup @BoxType
  return { width, height, top, left };
}
