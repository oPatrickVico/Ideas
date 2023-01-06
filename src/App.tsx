import React, { useState } from 'react';
import './App.css';
import { mouseDownHandler } from './helpers/DragToScroll';
import Link, { LinkProps } from './Link/Link';
import Node, { NodeProps } from './Node/Node';

function App() {
  const [linkPropsList, setLinkPropsList] = useState<LinkProps[]>([]);
  const [nodePropsList, setNodePropsList] = useState<NodeProps[]>([]);

  return (
    <main
      className="App"
      onMouseDown={mouseDownHandler}
      onDoubleClick={addNodeProps}
    >
      {linkPropsList.map((props, linkIndex) => (
        <Link
          startX={props.startX}
          startY={props.startY}
          endX={props.endX}
          endY={props.endY}
          key={linkIndex}
        />
      ))}
      {nodePropsList.map((props, nodeIndex) => (
        <Node originX={props.originX} originY={props.originY} key={nodeIndex} />
      ))}
    </main>
  );

  function addNodeProps(e: any): void {
    e.preventDefault();
    const newNodeProps: NodeProps = { originY: e.pageY, originX: e.pageX };
    setNodePropsList((a) => a.concat([newNodeProps]));
  }
}

export default App;
