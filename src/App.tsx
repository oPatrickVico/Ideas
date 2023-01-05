import React, { useEffect } from 'react';
import './App.css';
import { mouseDownHandler } from './helpers/DragToScroll';
import { Node } from './Node/Node';

function App() {
  return (
    <div className="App" onMouseDown={mouseDownHandler}>
      <Node />
    </div>
  );
}

export default App;
