import React from 'react';
import './Node.scss';

export function Node() {
  const style: NodeStyle = {
    width: 500,
    height: 500,
    top: 200,
    left: 500,
    '--bg-color': 'hsl(190,50%,70%)',
  };

  return (
    <article className="Node" style={style}>
      <h1 className="Node__title">Some title...</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        quod ut eius ex repellendus accusantium labore corrupti corporis, ipsum
        temporibus quasi soluta fuga quo aut dicta reiciendis sit maiores!
        Quaerat.
      </p>
    </article>
  );
}

interface NodeStyle {
  width: number;
  height: number;
  top: number;
  left: number;

  [key: string]: any;
}
