import React, { useState } from 'react';
import './App.css';
import { mouseDownHandler } from './helpers/DragToScroll';
import Node, { NodeProps } from './Node/Node';

function App() {
  const [nodePropsList, setNodePropsList] = useState<NodeProps[]>([]);

  return (
    <main
      className="App"
      onMouseDown={mouseDownHandler}
      onDoubleClick={addNodeProps}
    >
      {nodePropsList.map((props) => (
        <Node originX={props.originX} originY={props.originY} />
      ))}
    </main>
  );

  function addNodeProps(e: any): void {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    setNodePropsList((a) => a.concat([{ originY: y, originX: x }]));
  }
}

export default App;
