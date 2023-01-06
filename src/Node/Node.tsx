import React, { useEffect, useRef, useState } from 'react';
import './Node.scss';

type Coords = {
  x: number | null;
  y: number | null;
};

export type NodeProps = {
  originX: number;
  originY: number;
  testid?: string;
};

// @dryup @BoxType Nodes and links share a lot of data.
// Abstracting away may be a good idea.
interface NodeStyle {
  width: number;
  height: number;
  top: number;
  left: number;
  [key: string]: any;
}

const randomColor = () => {
  let newColor = Math.floor(Math.random() * 16777215).toString(16);
  return newColor.length === 6 ? newColor : newColor + '0';
};

export default function Node({ originX, originY, testid }: NodeProps) {
  const ref = useRef<any>();
  const [color] = useState(randomColor());
  const [anchorCoords, setAnchorCoords] = useState<Coords>({
    x: null,
    y: null,
  });

  const style: NodeStyle = {
    width: 500,
    height: 500,
    left: originX - 500 / 2,
    top: originY - 500 / 2,
    '--bg-color': `#${color}`,
  };

  // ----------------------------------------------------------------
  // @dryup @useAnchorEvents transform this code into a custom hook
  function updateAnchorCoords(e: any): void {
    if (e.target !== ref.current) {
      return;
    }
    setAnchorCoords({ x: e.clientX, y: e.clientY });
  }

  function clearAnchorCoords(): void {
    setAnchorCoords({ x: null, y: null });
  }

  // Add event listener with correct capturing
  useEffect(() => {
    ref.current.addEventListener('mousemove', updateAnchorCoords, {
      capture: true,
    });
    ref.current.addEventListener('mouseleave', clearAnchorCoords, {
      capture: true,
    });

    return () => {
      ref.current.removeEventListener('mousemove', updateAnchorCoords);
      ref.current.removeEventListener('mouseleave', clearAnchorCoords);
    };
  }, [ref.current]);
  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  return (
    <article
      className="Node"
      style={{ ...style, padding: 30 }}
      data-testid={testid ? testid : null}
      ref={ref}
    >
      <div className="Node__content-holder">
        <h1 className="Node__title">Some title...</h1>
        <p className="Node__textbox">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          quod ut eius ex repellendus accusantium labore corrupti corporis,
          ipsum temporibus quasi soluta fuga quo aut dicta reiciendis sit
          maiores! Quaerat.
        </p>
        <AnchorDisc x={anchorCoords.x} y={anchorCoords.y} />
      </div>
    </article>
  );
}

function AnchorDisc({ x, y }: Coords) {
  if (!x || !y) return null;

  return (
    <div
      style={{
        backgroundColor: 'red',
        width: 16,
        height: 16,
        borderRadius: '50%',
        position: 'fixed',
        top: y - 8,
        left: x - 8,
      }}
    >
      &nbsp;
    </div>
  );
}
