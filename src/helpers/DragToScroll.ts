/*
  Largely copied from here: https://htmldom.dev/drag-to-scroll/

  The logic goes as follows:

  mouseDown initializes the pos state and adds two event listeners and sets the cursor to grabbing
  mouseMove calculates the delta of old position and new poistion, scrolling in the process
  mouseUp cleans the listeners and resets the cursor to default

  The reason I cannot test this feature: https://github.com/testing-library/react-testing-library/issues/671#issuecomment-629380220

  Guess I have to learn Cypress!
*/

interface Position {
  top: number;
  left: number;
  x: number;
  y: number;
}

let pos: Position = { top: 0, left: 0, x: 0, y: 0 };

export function mouseDownHandler(e: any): void {
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
  const speedCap = 0.85;
  const newScrollX = max(window.scrollX - dx * speedCap, 0);
  const newScrollY = max(window.scrollY - dy * speedCap, 0);
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
