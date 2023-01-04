import { useEffect } from 'react';
import './App.css';
import { Node } from './Node/Node';

function App() {
  return (
    <div className="App" onMouseDown={mouseDownHandler}>
      <Node />
    </div>
  );
}

export default App;

let pos = { top: 0, left: 0, x: 0, y: 0 };

function mouseDownHandler(e: any): void {
  if (e.button !== 1) return;

  // Change the cursor and prevent user from selecting the text
  document.body.style.cursor = 'grabbing';
  document.body.style.userSelect = 'none';

  pos = {
    // Get viewport current scroll
    top: window.scrollY,
    left: window.scrollX,

    // Get mouse scroll
    x: e.clientX,
    y: e.clientY,
  };

  window.addEventListener('mousemove', mouseMoveHandler);
  window.addEventListener('mouseup', mouseUpHandler);
}

function mouseMoveHandler(e: any): void {
  // Calculate mouse motion
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  const { max } = Math;

  // Scroll dat thang
  const newScrollX = max(window.scrollX - dx * 0.5, 0);
  const newScrollY = max(window.scrollY - dy * 0.5, 0);
  window.scroll({
    left: newScrollX,
    top: newScrollY,
    behavior: 'smooth',
  });
}

function mouseUpHandler(e: any): void {
  window.removeEventListener('mousemove', mouseMoveHandler);
  window.removeEventListener('mouseup', mouseUpHandler);

  document.body.style.cursor = 'default';
  document.body.style.removeProperty('user-select');
}

function useScrollPostion(): void {
  useEffect(() => {
    const logPos = () => console.log(window.scrollX, window.scrollY);
    window.addEventListener('scroll', logPos);
    return () => {
      window.removeEventListener('scroll', logPos);
    };
  }, []);
}
