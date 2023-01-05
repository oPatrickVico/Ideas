import React, { useEffect, useId, useState } from 'react';
import './App.css';
import { mouseDownHandler } from './helpers/DragToScroll';
import Node from './Node/Node';

function App() {
  const [nodeList, setNodeList] = useState<any[]>([]);

  return (
    <main
      className="App"
      onMouseDown={mouseDownHandler}
      onDoubleClick={(e: any) => {
        e.preventDefault();
        const x = e.clientX;
        const y = e.clientY;
        setNodeList((a) => a.concat([<Node originX={x} originY={y} />]));
      }}
    >
      {nodeList}
    </main>
  );
}

export default App;
