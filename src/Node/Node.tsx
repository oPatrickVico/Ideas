import React from 'react';
import './Node.scss';

interface NodeProps {
  originX: number;
  originY: number;
  testid?: string;
}

interface NodeStyle {
  width: number;
  height: number;
  top: number;
  left: number;
  [key: string]: any;
}

export default function Node({ originX, originY, testid }: NodeProps) {
  const style: NodeStyle = {
    width: 500,
    height: 500,
    left: originX - 500 / 2,
    top: originY - 500 / 2,
    '--bg-color': 'hsl(190,50%,70%)',
  };

  return (
    <article className="Node" style={style} data-testid={testid}>
      <h1 className="Node__title">Some title...</h1>
      <p className="Node__textbox">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        quod ut eius ex repellendus accusantium labore corrupti corporis, ipsum
        temporibus quasi soluta fuga quo aut dicta reiciendis sit maiores!
        Quaerat.
      </p>
    </article>
  );
}
