import { useState } from 'react';
import './App.css';
import { Node } from './Node/Node';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Node />
    </div>
  );
}

export default App;
