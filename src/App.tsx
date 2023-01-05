import React, { useEffect, useId, useState } from 'react';
import './App.css';
import { mouseDownHandler } from './helpers/DragToScroll';
import { Node } from './Node/Node';

function App() {
  const [nodeList, setNodeList] = useState<any[]>([]);

  return (
    <main
      className="App"
      onMouseDown={mouseDownHandler}
      onDoubleClick={() => {
        setNodeList((a) => a.concat([<Node />]));
      }}
    >
      {nodeList}
    </main>
  );
}

export default App;
